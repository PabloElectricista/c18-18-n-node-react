import { verifyScopesByRole } from "../../utils/functions/token-functions.js";
export default class TokenUseCases {
  constructor(jwt) {
    this.jwt = jwt;
  }

  generateToken = async (userId, role) => {
    try {
      if (!userId) return [null, "empty data not allow"];
      const token = await this.jwt.sign(
        { userId, role },
        process.env.JWT_SECRET_KEY,
        {
          algorithm: "HS256",
          expiresIn: "15m",
        }
      );
      return [token, null];
    } catch (error) {
      return [null, error.message];
    }
  };

  verifyToken = (token, roles) => {
    try {
      if (!token) return [null, 401, "Token not provided"];

      const decodedToken = this.jwt.verify(token, process.env.JWT_SECRET_KEY);

      const isAuthorized = verifyScopesByRole(decodedToken.role, roles);
      if (!isAuthorized) return [null, 403, "Unauthorized"];

      return [decodedToken, 200, null];
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return [null, 401, "Token has expired"];
      }
    }
    return [null, 403, "Invalid token."];
  };
}
