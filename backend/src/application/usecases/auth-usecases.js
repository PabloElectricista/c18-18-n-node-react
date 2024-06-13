import nodemailer from "nodemailer";
export default class AuthUseCases {
    constructor(patientPrismaRepository, tokenUseCases) {
      this.patientPrismaRepository = patientPrismaRepository;
      this.tokenUseCases = tokenUseCases;
    }

   recoveryPassword = async (email) => {
    const [patientEmail, error] = await this.patientPrismaRepository.findPatientByEmail(
      email
    );
    if (error) return [null, 404, error];
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", //configuracion para usar gmail
      port: 465, //puerto para gmail
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "agendasalud05@gmail.com",
        pass: "ruvcpsdxzjskunhd",
      },
    });

    transporter.verify().then(() => {
      console.log("Ready for send emails");
    });

    try {
      const info = await transporter.sendMail({
        from: '"recovery password" <agendasalud05@gmail.com>', // desde donde llega el email y quienes somos
        to: email, // para quien enviamos el email //modificar variable de donde llega
        subject: "recovery password", // Subject line
        html: `
        <p>Hemos recibido una solicitud para recuperar tu contraseña.</p>
        <p>su contraseña es: ${patientEmail.phone}.</p>
        <p>Tu grupo de Agenda Salud</p>`, 
      });
    } catch (error) {
      return res.status(400).json({
        message: "Error al enviar el email",
      });
    }
  return [patientEmail, 200, null];
  };
  
loginPatient = async (loginPatient) => {
 const [patient, error] = await this.patientPrismaRepository.findPatientByEmail(loginPatient.email);
 if (error) return [null, 404, error];
 
 if (patient.phone !== loginPatient.phone)
 return [ null, 400, "contraseña no coincide con el usuario"];
 
 const [token, errors] = await this.tokenUseCases.generateToken(patient.id, patient.role);
 if (errors) return [null, 400, errors];
 return [token, patient, 200, null];
    }  
 
}

