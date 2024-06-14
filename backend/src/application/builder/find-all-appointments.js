class FindAllAppointmentBuilder {
  constructor(recordAppointment, allClinic) {
    this.appointment = {};
    this.recordAppointment = recordAppointment;
    this.allClinic = allClinic || [];
  }
  build = () => {
    this.setId();
    this.setNamePatient();
    this.setLastNamePatient();
    this.setPatientDni();
    this.setDoctorName();
    this.setDoctorLastName();
    this.setSpecialty();
    this.setNameClinic();
    this.setRoomNumber();
    this.setStatus();
    this.setStatusDate();
    this.setStatusLog();
    this.setDuration();
    this.setReservedAt();
    this.setCreatedAt();

    return this.appointment;
  };
  setId = () => (this.appointment.id = this.recordAppointment.id);
  setNamePatient = () =>
    (this.appointment.patient_name = this.recordAppointment.Patient.name);
  setLastNamePatient = () =>
    (this.appointment.patient_last_name =
      this.recordAppointment.Patient.last_name);
  setPatientDni = () =>
    (this.appointment.patient_dni = this.recordAppointment.Patient.patient_dni);
  setDoctorName = () =>
    (this.appointment.doctor_name = this.recordAppointment.doctor.name);
  setDoctorLastName = () =>
    (this.appointment.doctor_last_name =
      this.recordAppointment.doctor.last_name);
  setSpecialty = () =>
    (this.appointment.specialty_name = this.recordAppointment.Specialties.name);
  setNameClinic = () => {
    const nameClinic = this.allClinic.find(
      (clinic) => clinic.id === this.recordAppointment.clinic_id
    );
    this.appointment.name_clinic = nameClinic
      ? nameClinic.name_clinic
      : this.recordAppointment.nameClinic;
  };
  setRoomNumber = () => {
    const roomClinic = this.allClinic.find(
      (clinic) => clinic.id === this.recordAppointment.clinic_id
    );
    this.appointment.room_number = roomClinic
      ? roomClinic.room_number
      : this.recordAppointment.roomClinic;
  };

  setStatus = () => (this.appointment.status = this.recordAppointment.status);
  setStatusDate = () =>
    (this.appointment.status_date = this.recordAppointment.status_date);
  setStatusLog = () =>
    (this.appointment.status_logs = this.recordAppointment.status_logs);
  setDuration = () =>
    (this.appointment.duration = this.recordAppointment.duration);
  setReservedAt = () =>
    (this.appointment.reserved_at = this.recordAppointment.reserved_at);
  setCreatedAt = () =>
    (this.appointment.created_at = this.recordAppointment.created_at);
}

const buildRecordAppointment = (recordAppointment, allClinic) => {
  const recordAppointmentBuilder = new FindAllAppointmentBuilder(
    recordAppointment,
    allClinic
  );
  return recordAppointmentBuilder.build();
};
export default { buildRecordAppointment, FindAllAppointmentBuilder };
