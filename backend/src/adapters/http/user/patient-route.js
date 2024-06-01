import patientHandler from "../../../utils/intances-usecases.js";

const routes = [
  {
    url: "/patient",
    method: "GET",
    handler: patientHandler.findAllPatients,
  },
  {
    url: "/patient",
    method: "POST",
    handler: patientHandler.createNewPatient,
  },
];

export default routes;
