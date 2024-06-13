import { authHandler } from "../../../utils/intances-usecases.js";

const routes =[
    {
        url:'/auth/login',
        method: 'POST',
        handler: authHandler.loginPatient,
    },
    {
      url: "/auth/recovery-password",
      method: "POST",
      preHandler: [],
      handler: authHandler.recoveryPassword,
    },


export default routes;
