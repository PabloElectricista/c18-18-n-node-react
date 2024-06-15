import { schedulerHandler } from "../../../utils/intances-usecases.js";

const routes = [
  {
    url: "/scheduler-date",
    method: "GET",
    handler: schedulerHandler.findSchedulersByDate,
  },
  {
    url: "/scheduler",
    method: "GET",
    handler: schedulerHandler.findAllSchedulers,
  },
  {
    url: "/scheduler/:id",
    method: "GET",
    handler: schedulerHandler.findSchedulerById,
  },
  {
    url: "/scheduler/doctor/:id",
    method: "GET",
    handler: schedulerHandler.findSchedulerByDoctor,
  },
  {
    url: "/scheduler",
    method: "POST",
    handler: schedulerHandler.createNewScheduler,
  },
  {
    url: "/scheduler/:id",
    method: "PATCH",
    handler: schedulerHandler.updateScheduler,
  },
  {
    url: "/scheduler/:id",
    method: "DELETE",
    handler: schedulerHandler.deleteScheduler,
  },
];

export default routes;
