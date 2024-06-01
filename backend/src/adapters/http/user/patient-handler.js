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

  createNewPatient = async (req, res) => {
    try {
      const [patient, status, err] =
        await this.patientUseCases.createNewPatient(req.body);
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
}
