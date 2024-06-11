import { createNewPatientValidations } from "../../../utils/functions/input-validations.js";
export default class PatientHandler {
  constructor(patientUseCases) {
    this.patientUseCases = patientUseCases;
  }

  findAllPatients = async (req, res) => {
    try {
      const [patients, status, err] =
        await this.patientUseCases.findAllPatients();
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: patients,
      });
    } catch (error) {
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  findPatientById = async (req, res) => {
    try {
      const [patient, status, err] = await this.patientUseCases.findPatientById(
        req.params.id
      );
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: patient,
      });
    } catch (error) {
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  createNewPatient = async (req, res) => {
    try {
      const errors = createNewPatientValidations(req.body);
      if (errors)
        return res.status(400).send({
          message: "fail",
          errors,
        });
      const [patient, token, status, err] =
        await this.patientUseCases.createNewPatient(req.body);
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        token,
        data: patient,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  updatePatientById = async (req, res) => {
    try {
      const [patient, status, err] =
        await this.patientUseCases.updatePatientById(req.params.id, req.body);
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: patient,
      });
    } catch (error) {
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };

  deletePatientById = async (req, res) => {
    try {
      const [patient, status, err] =
        await this.patientUseCases.deletePatientById(req.params.id);
      if (err)
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      return res.status(status).send({
        message: "success",
        data: `Patient deleted successfully: ${patient.id}`,
      });
    } catch (error) {
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
    }
  };
}
