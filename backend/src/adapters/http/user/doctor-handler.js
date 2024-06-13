import {
  createNewDoctorValidations,
  updateDoctorValidations,
} from "../../../utils/functions/input-validations.js";

export default class Doctorhandler {
  constructor(doctorUseCases) {
    this.doctorUseCases = doctorUseCases;
  }

  findAllDoctors = async (req, res) => {
    try {
      const [doctors, status, err] = await this.doctorUseCases.findAllDoctors(
        req.body
      );
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: doctors,
      });
    } catch (error) {
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  findDoctorById = async (req, res) => {
    try {
      const [doctor, status, err] = await this.doctorUseCases.findDoctorById(
        req.params.id
      );
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: doctor,
      });
    } catch {
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  createNewDoctor = async (req, res) => {
    try {
      const errors = createNewDoctorValidations(req.body);
      if (errors)
        return res.status(400).send({
          message: "fail",
          errors: errors,
        });
      const [doctor, token, status, err] =
        await this.doctorUseCases.createNewDoctor(req.body);
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: doctor,
        token,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  updateDoctorById = async (req, res) => {
    try {
      const errors = updateDoctorValidations(req.body);
      if (errors)
        return res.status(400).send({
          message: "fail",
          errors: errors,
        });
      const [user, status, err] = await this.doctorUseCases.updateDoctorById(
        req.params.id,
        req.body
      );
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  deleteDoctorById = async (req, res) => {
    try {
      const [doctor, status, err] = await this.doctorUseCases.deleteDoctorById(
        req.params.id
      );
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: `Doctor deleted successfully with Id:${doctor.id}`,
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
