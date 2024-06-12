import validateAppointmentsByUser from "../../utils/functions/appointment-validation.js";
import { getFormatDate } from "../../utils/functions/date.js";
export default class AppointmentUseCases {
  constructor(
    appointmentsPrismaRepository,
    patientUseCases,
    clinicUseCases,
    doctorUseCases,
    specialtyUseCases,
    schedulerUseCases,
    schedulerPrismaRepository,
    builder
  ) {
    this.appointmentsPrismaRepository = appointmentsPrismaRepository;
    this.patientUseCases = patientUseCases;
    this.clinicUseCases = clinicUseCases;
    this.doctorUseCases = doctorUseCases;
    this.specialtyUseCases = specialtyUseCases;
    this.schedulerUseCases = schedulerUseCases;
    this.schedulerPrismaRepository = schedulerPrismaRepository;
    this.builder = builder;
  }
  findAllAppointments = async () => {
    const [appointmentsData, clinicData] = await Promise.all([
      this.appointmentsPrismaRepository.findAllAppointments(),
      this.clinicUseCases.findAllClinics(),
    ]);

    const [appointments, appointmentError] = appointmentsData;
    const [clinic, , clinicError] = clinicData;

    if (appointmentError) return [null, 404, appointmentError];
    if (clinicError) return [null, 404, clinicError];

    const buildedAppointments = appointments.map((appointment) => {
      return this.builder.buildRecordAppointment(appointment, clinic);
    });
    return [buildedAppointments, 200, null];
  };
  findAppointmentById = async (appointmentId) => {
    const [appointmentsData, clinicData] = await Promise.all([
      this.appointmentsPrismaRepository.findAppointmentById(appointmentId),
      this.clinicUseCases.findAllClinics(),
    ]);

    const [appointment, appointmentError] = appointmentsData;
    const [clinic, , clinicError] = clinicData;

    if (appointmentError) return [null, 404, appointmentError];
    if (clinicError) return [null, 404, clinicError];

    const buildedAppointment = this.builder.buildRecordAppointment(
      appointment,
      clinic
    );

    return [buildedAppointment, 200, null];
  };
  findAppointmentByUser = async (decodedToken) => {
    const userId = decodedToken;
    const [appointmentsData, clinicData] = await Promise.all([
      this.appointmentsPrismaRepository.findAppointmentByUser(userId),
      this.clinicUseCases.findAllClinics(),
    ]);
    const [appointment, appointmentError] = appointmentsData;
    const [clinic, , clinicError] = clinicData;

    if (appointmentError) return [null, 404, appointmentError];
    if (clinicError) return [null, 404, clinicError];

    const buildedAppointmentByUser = appointment.map((appointment) => {
      return this.builder.buildRecordAppointment(appointment, clinic);
    });

    return [buildedAppointmentByUser, 200, null];
  };
  createNewAppointment = async (appointmentPayload, decodedToken) => {
    const { userId } = decodedToken;
    const {
      scheduler_id: schedulerId,
      clinic_id: clinicId,
      doctor_id: doctorId,
      specialty_id: specialtyId,
    } = appointmentPayload;

    const [
      patientData,
      clinicData,
      doctorData,
      specialtyData,
      AppointmentData,
    ] = await Promise.all([
      this.patientUseCases.findPatientById(userId),
      this.clinicUseCases.findClinicById(clinicId),
      this.doctorUseCases.findDoctorById(doctorId),
      this.specialtyUseCases.findSpecialtyById(specialtyId),
      this.appointmentsPrismaRepository.findAppointmentByUser(userId),
    ]);
    const [appointmentsRecord, appointmentErr] = AppointmentData;
    const [, , patientErr] = patientData;
    const [, , clinicErr] = clinicData;
    const [, , doctorErr] = doctorData;
    const [, , specialtyErr] = specialtyData;

    if (patientErr) return [null, 404, patientErr];
    if (clinicErr) return [null, 404, clinicErr];
    if (doctorErr) return [null, 404, doctorErr];
    if (specialtyErr) return [null, 404, specialtyErr];

    const [scheduler, status, schedulerError] =
      await this.schedulerUseCases.findSchedulerById(schedulerId);
    if (schedulerError) return [null, status, schedulerError];

    // valida si un usuario tiene dos citas el mismo dia
    if (!appointmentErr) {
      const appointmentExist = validateAppointmentsByUser(
        scheduler.appointments,
        appointmentsRecord
      );

      if (appointmentExist)
        return [
          null,
          400,
          "Ya tiene una cita agendada para el dia de hoy, solo puede tener una cita por dia",
        ];
    }

    const newAppointment = {
      ...appointmentPayload,
      patient_id: userId,
      room_number: clinicData[0] ? clinicData[0].room_number : null,
      status_date: getFormatDate(),
      created_at: getFormatDate(),
      status: "RESERVED",
    };

    /**
     * scheduler id solo se usa para validar citas existentes, no para la creacion
     */
    delete newAppointment.scheduler_id;

    const status_logs = [
      { code: newAppointment.status, date: newAppointment.status_date },
    ];
    newAppointment.status_logs = status_logs;

    const [appointment, err] =
      await this.appointmentsPrismaRepository.createNewAppointment(
        newAppointment
      );
    if (err) return [null, 500, err];

    //caso de uso de scheduler para update cuando se cree una cita
    const [, , schedulerErr] = await this.schedulerUseCases.updateScheduler(
      schedulerId,
      appointment
    );

    if (schedulerErr) {
      await this.deleteAppointment(appointment.id);
      return [null, 400, schedulerErr];
    }
    return [appointment, 200, null];
  };

  updateAppointment = async (appointmentId, appointmentPayload) => {
    const [recordAppointment, err] =
      await this.appointmentsPrismaRepository.findAppointmentById(
        appointmentId
      );

    if (err) return [null, 404, err];

    if (appointmentPayload.status === recordAppointment.status) {
      return [null, 400, "the status must be different to allow update"];
    }

    if (appointmentPayload.status) {
      const newStatusLog = {
        code: appointmentPayload.status,
        date: getFormatDate(),
      };
      appointmentPayload.status_logs = [
        ...recordAppointment.status_logs,
        newStatusLog,
      ];
    }

    const [appointment, errAppoinment] =
      await this.prismaRepository.updateAppointment(
        appointmentId,
        appointmentPayload
      );

    if (errAppoinment) return [null, 404, err];
    return [appointment, 200, null];
  };

  deleteAppointment = async (appointmentId) => {
    const [schedulers, schedulersErr] =
      await this.schedulerPrismaRepository.findAllSchedulers();
    if (schedulersErr) return [null, 404, schedulersErr];

    const [newScheduler, ifSchedulerFinded] =
      this.deletedAppointmentInScheduler(schedulers, appointmentId);

    if (!ifSchedulerFinded || !newScheduler)
      return [null, 400, "scheduler dont exist"];

    const [, deleteAppointmentData] = await Promise.all([
      this.schedulerPrismaRepository.updateScheduler(newScheduler.id, {
        appointments: newScheduler.appointments,
      }),
      this.appointmentsPrismaRepository.deleteAppointment(appointmentId),
    ]);
    const [deleteAppointment, deleteErr] = deleteAppointmentData;
    if (deleteErr) return [null, 404, deleteErr];

    return [deleteAppointment, 200, null];
  };

  deletedAppointmentInScheduler = (schedulers, appointmentId) => {
    let newScheduler;
    let ifSchedulerFinded = false;
    schedulers.forEach((scheduler) => {
      if (ifSchedulerFinded) return;
      Object.entries(scheduler.appointments).forEach(([hour, value]) => {
        if (value === appointmentId) {
          scheduler.appointments[hour] = null;
          newScheduler = { ...scheduler };
          ifSchedulerFinded = true;
          return;
        }
      });
    });
    return [newScheduler, ifSchedulerFinded];
  };
}
