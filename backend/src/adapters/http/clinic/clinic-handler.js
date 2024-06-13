import {
  createNewClinicValidations,
  updateDoctorValidations,
} from "../../../utils/functions/input-validations.js";

export default class ClinicHandler {
  constructor(clinicUseCases) {
    this.clinicUseCases = clinicUseCases;
  }

  findAllClinics = async (req, res) => {
    try {
      const [clinics, status, err] = await this.clinicUseCases.findAllClinics();
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: clinics,
      });
    } catch (error) {
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  findClinicById = async (req, res) => {
    try {
      const { clinicid } = req.params;
      const [clinic, status, err] = await this.clinicUseCases.findClinicById(
        clinicid
      );
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: clinic,
      });
    } catch (error) {
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };
  createNewClinic = async (req, res) => {
    try {
      const errors = createNewClinicValidations(req.body);
      if (errors)
        return res.status(400).send({
          message: "fail",
          errors,
        });
      const [clinic, status, err] = await this.clinicUseCases.createNewClinic(
        req.body
      );
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: clinic,
      });
    } catch (error) {
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  updateClinic = async (req, res) => {
    try {
      const errors = updateDoctorValidations(req.body);
      if (errors)
        return res.status(400).send({
          message: "fail",
          errors,
        });
      const [clinic, status, err] = await this.clinicUseCases.updateClinic(
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
        data: clinic,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };
  deleteClinic = async (req, res) => {
    try {
      const [clinic, status, err] = await this.clinicUseCases.deleteClinicById(
        req.params.id
      );
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: `clinic deleted successfully with Id:${clinic.id}`,
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
