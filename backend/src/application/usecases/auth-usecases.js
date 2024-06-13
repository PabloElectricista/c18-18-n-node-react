import nodemailer from "nodemailer";
export default class AuthUseCases {
  constructor(patientPrismaRepository, doctorPrismaRepository, tokenUseCases) {
    this.patientPrismaRepository = patientPrismaRepository;
    this.doctorPrismaRepository = doctorPrismaRepository;
    this.tokenUseCases = tokenUseCases;
  }

  recoveryPassword = async (email) => {
    const [patientEmail, error] =
      await this.patientPrismaRepository.findPatientByEmail(email);
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
      await transporter.sendMail({
        from: '"recovery password" <agendasalud05@gmail.com>', // desde donde llega el email y quienes somos
        to: email, // para quien enviamos el email
        subject: "recovery password",
        html: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
    <h2 style="color: #333; text-align: center;">Recuperación de Contraseña</h2>
    <p style="font-size: 16px; color: #555;">Hola,</p>
    <p style="font-size: 16px; color: #555;">Hemos recibido una solicitud para recuperar tu contraseña. Aquí tienes tu contraseña de recuperación:</p>
    <div style="text-align: center; margin: 20px 0;">
      <p style="font-size: 18px; color: #000; font-weight: bold;">${patientEmail.phone}</p>
    </div>
    <p style="font-size: 16px; color: #555;">Si no hiciste esta solicitud, por favor, contacta con nuestro soporte.</p>
    <p style="font-size: 16px; color: #555;">Gracias,</p>
    <p style="font-size: 16px; color: #555;"><strong>Tu equipo de Agenda Salud</strong></p>
  </div>
`,
      });
    } catch (error) {
      return res.status(400).json({
        message: "Error al enviar el email",
      });
    }
    return [patientEmail, 200, null];
  };

  loginUser = async (loginUser) => {
    const [patient, patientError] =
      await this.patientPrismaRepository.findPatientByEmail(loginUser.email);
    if (patientError) {
      const [doctor, doctorError] =
        await this.doctorPrismaRepository.findDoctorByEmail(loginUser.email);
      if (doctorError) return [null, 404, "Usuario no encontrado"];

      if (doctor.phone !== loginUser.phone)
        return [null, 400, "Contraseña no coincide con el usuario"];
      const [token, tokenError] = await this.tokenUseCases.generateToken(
        doctor.id,
        doctor.role
      );
      if (tokenError) return [null, 400, tokenError];
      return [token, doctor, 200, null];
    }

    if (patient.phone !== loginUser.phone)
      return [null, 400, "Contraseña no coincide con el usuario"];
    const [token, tokenError] = await this.tokenUseCases.generateToken(
      patient.id,
      patient.role
    );
    if (tokenError) return [null, 400, tokenError];
    return [token, patient, 200, null];
  };
}
