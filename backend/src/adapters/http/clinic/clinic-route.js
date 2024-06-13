import { clinicHandler } from "../../../utils/intances-usecases.js";

const routes = [
  {
    url: "/clinic",
    method: "GET",
    handler: clinicHandler.findAllClinics,
  },
  {
    url: "/clinic/:id",
    method: "GET",
    handler: clinicHandler.findClinicById,
  },
  {
    url: "/clinic",
    method: "POST",
    handler: clinicHandler.createNewClinic, //function editada franco
  },
  {
    url: "/clinic/:id",
    method: "PATCH",
    handler: clinicHandler.updateClinic,
  },
  {
    url: "/clinic/:id",
    method: "DELETE",
    handler: clinicHandler.deleteClinic,
  },
];

export default routes;
