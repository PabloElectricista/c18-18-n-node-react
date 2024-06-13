import {
  appointmentHandler,
  tokenMiddleware,
} from "../../../utils/intances-usecases.js";

const routes = [
  {
    url: "/appointments",
    method: "GET",
    handler: appointmentHandler.findAllAppointments,
  },
  {
    url: "/appointments/:id",
    method: "GET",
    handler: appointmentHandler.findAppointmentById,
  },
  {
    url: "/appointments/patient",
    method: "GET",
    preHandler: [tokenMiddleware.verifyPatientToken],
    handler: appointmentHandler.findAppointmentByUser,
  },
  {
    url: "/appointments",
    method: "POST",
    preHandler: [tokenMiddleware.verifyPatientToken],
    handler: appointmentHandler.createNewAppointment,
  },
  {
    url: "/appointments/:id",
    method: "PATCH",
    handler: appointmentHandler.updateAppointment,
  },
  {
    url: "/appointments/:id",
    method: "DELETE",
    handler: appointmentHandler.deleteAppointment,
  },
];

export default routes;
