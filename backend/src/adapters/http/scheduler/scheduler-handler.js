export default class SchedulerHandler {
  constructor(schedulerUsecases) {
    this.usecases = schedulerUsecases;
  }

  findAllSchedulers = async (req, res) => {
    try {
      const [schedulers, status, err] = await this.usecases.findAllSchedulers();
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
        await this.usecases.findSchedulersByFilters(req.query);
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
      const [schedulerId, status, err] = await this.usecases.findSchedulerById(
        req.params.id
      );
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
        await this.usecases.createNewScheduler(req.body);
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "succes",
        data: schedulerPayload,
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
        await this.usecases.updateScheduler(req.params.id, req.body);
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
        await this.usecases.deleteScheduler(req.params.id);
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: `deleted Scheduler with ID: ${deleteScheduler.id}`,
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
