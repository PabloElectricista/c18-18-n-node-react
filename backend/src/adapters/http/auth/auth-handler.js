import { loginPatientValidations, emailValidations } from "../../../utils/functions/input-validations.js";
export default  class AuthHandler {
  constructor(authUseCases) {
    this.authUseCases= authUseCases;
  }
  
   recoveryPassword = async (req, res) => {
    try {
      const errors = emailValidations(req.body);
      if (errors)
        return res.status(400).send({
          message: "fail",
          errors,
        });
      const { email } = req.body;
      const [user, status, err] = await this.authUseCases.recoveryPassword(email);
      if (err)
        return res.status(status).send({
          message:"fail",
          errors:err,
        });
      return res.status(status).send({
        message: "success",
        data: `The password has already been sent to the email: ${user.email}`,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        message: "There was internal server error",
        errors: error,
      });
      
      
  loginPatient = async (req, res) => {
    try {
      const errors = loginPatientValidations(req.body);
      if (errors) {
        return res.status(400).send({
          message:"fail",
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
        message:"success",
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: "fail",
        errors: "Internal server error",
      });
    }
  };
}
