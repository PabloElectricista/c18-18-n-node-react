const validateAppointmentByUser = (appointments, appointmentIdOfUser) => {
  return Object.values(appointments).find(
    (userId) => userId === appointmentIdOfUser
  );
};
/**funcion para validar si un paciente tiene cita el mismo dia */
const validateAppointmentsByUser = (
  appointmentsByScheduler,
  appoinmentsByUser
) => {
  for (const appointment of appoinmentsByUser) {
    if (validateAppointmentByUser(appointmentsByScheduler, appointment.id)) {
      return true;
    }
  }
  return false;
};

export default validateAppointmentsByUser;
