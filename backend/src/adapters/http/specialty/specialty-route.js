import { specialtyHandler } from "../../../utils/intances-usecases.js";

const routes = [
  {
    url: "/specialty",
    method: "GET",
    handler: specialtyHandler.findAllSpecialties,
  },
  {
    url: "/specialty/:id",
    method: "GET",
    handler: specialtyHandler.findSpecialtyById,
  },
  {
    url: "/specialty",
    method: "POST",
    handler: specialtyHandler.createNewSpecialty,
  },
  {
    url: "/specialty/:id",
    method: "PATCH",
    handler: specialtyHandler.updateSpecialtyById,
  },
  {
    url: "/specialty/:id",
    method: "DELETE",
    handler: specialtyHandler.deleteSpecialtyById,
  },

];

export default routes;
