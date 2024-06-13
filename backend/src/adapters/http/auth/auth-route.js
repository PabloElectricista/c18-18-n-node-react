
import { authHandler } from "../../../utils/intances-usecases.js"
const routes =[

    {
        url:'/auth/login',
        method: 'POST',
        handler: authHandler.loginPatient,
    }
]

export default routes