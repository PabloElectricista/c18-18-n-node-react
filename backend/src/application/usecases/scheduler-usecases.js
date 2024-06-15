import {
  getFormatDate,
  generateDateRange,
} from "../../utils/functions/date.js";
import {
  setAppoinments,
  updateAppointments,
} from "../../utils/functions/Appointment.js";
import validateSchedulerQueryParams from "../../utils/functions/query-validation.js";
import { dateFromAndDateToByFilters } from "../../utils/functions/Appointment.js";
export default class SchedulerUseCases {
  constructor(prismaRepository, doctorUseCase) {
    this.prismaRepository = prismaRepository;
    this.doctorUseCase = doctorUseCase;
  }
  findAllSchedulers = async () => {
    const [schedulers, err] = await this.prismaRepository.findAllSchedulers();
    if (err) return [null, 404, err];
    return [schedulers, 200, null];
  };
  findSchedulersByFilters = async (filters) => {
    const queryErrors = validateSchedulerQueryParams(filters);
    const [dateFrom, dateTo] = dateFromAndDateToByFilters(filters);
    if (queryErrors) return [null, 400, queryErrors];
    const [schedulers, err] = await this.prismaRepository.findSchedulersByDate(
      dateFrom,
      dateTo
    );
    if (err) return [null, 404, err];
    return [schedulers, 200, null];
  };

  findSchedulerById = async (schedulerId) => {
    const [scheduler, err] = await this.prismaRepository.findSchedulerById(
      schedulerId
    );
    if (err) return [null, 404, err];
    return [scheduler, 200, null];
  };

  findSchedulerByDoctor = async (doctorId) => {
    const [scheduler, err] = await this.prismaRepository.findSchedulerByDoctor(
      doctorId
    );
    if (err) return [null, 404, err];
    return [scheduler, 200, null];
  };

  createNewScheduler = async (schedulerPayload = {}, days = 3) => {
    const [doctors, , doctorErr] = await this.doctorUseCase.findAllDoctors();
    if (doctorErr) return [null, 404, doctorErr];

    const dates = [];
    generateDateRange(days, dates);
    const newSchedulers = [];

    dates.forEach((date) => {
      doctors.forEach((doctor) => {
        newSchedulers.push({
          doctor_id: doctor.id,
          ...setAppoinments(schedulerPayload),
          created_at: getFormatDate(date),
        });
      });
    });

    const [scheduler, err] = await this.prismaRepository.createNewScheduler(
      newSchedulers
    );
    if (err) return [null, 404, err];
    return [scheduler, 200, null];
  };

  updateScheduler = async (schedulerId, appointment) => {
    const [scheduler, errScheduler] =
      await this.prismaRepository.findSchedulerById(schedulerId);
    if (errScheduler) return [null, 404, errScheduler];

    const [updatedScheduler, errUpdateAppoinment] = updateAppointments(
      scheduler,
      appointment.id,
      appointment.reserved_at,
      appointment.duration
    );
    if (errUpdateAppoinment) return [null, 400, errUpdateAppoinment];

    const [updateScheduler, err] = await this.prismaRepository.updateScheduler(
      schedulerId,
      updatedScheduler
    );
    if (err) return [null, 404, err];
    return [updateScheduler, 200, null];
  };

  deleteScheduler = async (schedulerId) => {
    const [deletescheduler, err] = await this.prismaRepository.deleteScheduler(
      schedulerId
    );
    if (err) return [null, 404, err];
    return [deletescheduler, 200, null];
  };
}
