export default class AuthUseCases {
    constructor(patientPrismaRepository, tokenUseCases) {
      this.patientPrismaRepository = patientPrismaRepository;
      this.tokenUseCases = tokenUseCases;
    }
  





































    
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
  