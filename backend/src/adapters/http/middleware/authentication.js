import { extractTokenToHeader } from "../../../utils/functions/token-functions.js";
export default class TokenMiddleware {
  constructor(tokenUseCases) {
    this.tokenUseCases = tokenUseCases;
    this.token = null;
  }
  verifyDoctorToken = (req, res, next) => {
    const errorSetToken = this.token(req, res);
    if (errorSetToken) return errorSetToken;
    const [decodedToken, status, errToken] = this.tokenUseCases.verifyToken(
      this.token,
      ["DOCTOR"]
    );
    res.locals = { decodedToken };
    if (errToken) {
      return res.status(status).send({
        message: "fail",
        errors: errToken,
      });
    }
    next();
  };

  verifyPatientToken = (req, res, next) => {
    const errorSetToken = this.setToken(req, res);
    if (errorSetToken) return errorSetToken;
    const [decodedToken, status, errToken] = this.tokenUseCases.verifyToken(
      this.token,
      ["DOCTOR", "PATIENT"]
    );
    res.locals = { decodedToken };
    if (errToken)
      return res.status(status).send({
        message: "fail",
        errors: errToken,
      });
    next();
  };

  setToken = (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
      res.status(401).send({
        message: "fail",
        errors: "Metodo de autenticacion invalido",
      });
      return res;
    }
    this.token = extractTokenToHeader(token);
  };
}
