import { loginPatientValidations } from "../../../utils/functions/input-validations.js";
export default  class AuthHandler {
  constructor(authUseCases) {
    this.authUseCases= authUseCases;
  }

  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





  
  loginPatient = async (req, res) => {
    try {
      const errors = loginPatientValidations(req.body);
      if (errors) {
        return res.status(400).send({
          message: "fail",
          errors,
        });
      }
      const [token, patient, status, err] = await this.authUseCases.loginPatient(req.body);
      if (err) {
        return res.status(status).send({
          message: "fail",
          errors: err,
        });
      }
      return res.status(status).send({
        token,
        data: patient,
        message: "success",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: "fail",
        errors: "Internal server error",
      });
    }
  };
};
