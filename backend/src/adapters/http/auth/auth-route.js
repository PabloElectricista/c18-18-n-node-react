import { authHandler } from "../../../utils/intances-usecases.js";

const routes = [
  {
    url: "/auth/recovery-password",
    method: "POST",
    preHandler: [],
    handler: authHandler.recoveryPassword,
  },
];

export default routes;
