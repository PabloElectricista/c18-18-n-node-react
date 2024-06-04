import {patientHandler} from "../../../utils/intances-usecases.js";

const routes = [
  {
    url: "/patient",
    method: "GET",
    handler: patientHandler.findAllPatients,
  },
  {
    url: "/patient/:id",
    method: "GET",
    handler: patientHandler.findPatientById,
},
  {
    url: "/patient",
    method: "POST",
    handler: patientHandler.createNewPatient,
  },
  {
    url: "/doctor/:id",
     method: "PUT",
     handler: patientHandler.updatePatientById,
 },
 {
     url: "/patient/:id",
     method: "DELETE",
     handler: patientHandler.deletePatientById,
 },
  
];

export default routes;
