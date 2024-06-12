import { getSchedulerByDateValidations } from "../../../utils/functions/input-validations.js";
export default class SchedulerHandler {
  constructor(schedulerUsecases) {
    this.schedulerUsecases = schedulerUsecases;
  }

  findAllSchedulers = async (req, res) => {
    try {
      const [schedulers, status, err] =
        await this.schedulerUsecases.findAllSchedulers();
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: schedulers,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  findSchedulersByDate = async (req, res) => {
    try {
      const {
        date_type: dateType,
        date_from: dateFrom,
        date_to: dateTo,
      } = req.query;
      if (!dateType && !dateFrom && !dateTo)
        return res.status(400).send({
          message: "fail",
          errors: "la fecha es requerida",
        });
      const queryError = getSchedulerByDateValidations(req.query);
      if (queryError)
        return res.status(400).send({
          message: "fail",
          errors: queryError,
        });
      const [schedulers, status, err] =
        await this.schedulerUsecases.findSchedulersByFilters(req.query);
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: schedulers,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  findSchedulerById = async (req, res) => {
    try {
      const [schedulerId, status, err] =
        await this.schedulerUsecases.findSchedulerById(req.params.id);
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: schedulerId,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  createNewScheduler = async (req, res) => {
    try {
      const [schedulerPayload, status, err] =
        await this.schedulerUsecases.createNewScheduler(req.body);
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: `The schedulers for the ${schedulerPayload.count} registered doctors are now ready!`,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "There was internal server error",
      });
    }
  };

  updateScheduler = async (req, res) => {
    try {
      const [updateScheduler, status, err] =
        await this.schedulerUsecases.updateScheduler(req.params.id, req.body);
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: updateScheduler,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  deleteScheduler = async (req, res) => {
    try {
      const [deleteScheduler, status, err] =
        await this.schedulerUsecases.deleteScheduler(req.params.id);
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: `Schedulers deleted successfully with Id:${deleteScheduler.id}`,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };
}
