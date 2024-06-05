class FindAllAppointmentBuilder {
  constructor(recordAppointment) {
    this.appointment = {};
    this.recordAppointment = recordAppointment;
  }
  build = () => {
    this.setId();
    this.setName();
    this.setLastName();
    this.setSpecialty();
    this.setStatus();
    this.setStatusDate();
    this.setStatusLog();
    this.setDuration();
    this.setReservedAt();
    this.setDeleteAt();
    this.setCreatedAt();

    return this.appointment;
  };
  setId = () => (this.appointment.id = this.recordAppointment.id);
  setName = () =>
    (this.appointment.user_name = this.recordAppointment.user.name);
  setLastName = () =>
    (this.appointment.user_last_name = this.recordAppointment.user.last_name);
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

const buildRecordAppointment = (recordAppointment) => {
  const recordAppointmentBuilder = new FindAllAppointmentBuilder(
    recordAppointment
  );
  return recordAppointmentBuilder.build();
};
export default { buildRecordAppointment, FindAllAppointmentBuilder };
