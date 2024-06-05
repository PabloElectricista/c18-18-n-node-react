import {doctorHandler} from "../../../utils/intances-usecases.js"

const routes = [
    {
        url: "/doctor",
        method: "GET",
        handler: doctorHandler.findAllDoctors,
    },
    {
        url: "/doctor/:id",
        method: "GET",
        handler: doctorHandler.findDoctorById,
    },
    {
        url: "/doctor",
        method: "POST",
        handler: doctorHandler.createNewDoctor,
    },
    {
       url: "/doctor/:id",
        method: "PUT",
        handler: doctorHandler.updateDoctorById,
    },
    
    {
        url: "/doctor/:id",
        method: "DELETE",
        handler: doctorHandler.deleteDoctorById,
    },
   
  
];

export default routes;

