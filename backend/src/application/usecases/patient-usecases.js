export default class PatientUseCases {
  constructor(patientPrismaRepository) {
    this.patientPrismaRepository = patientPrismaRepository;
  }

  findAllPatients = async () => {
    const [patients, err] =
      await this.patientPrismaRepository.findAllPatients();
    if (err) return [null, 404, err];
    return [patients, 200, null];
  };

  createNewPatient = async (newPatientPayload) => {
    /*const [userByEmail] = await this.userPrismaRepository.findAllUsers(newPatientPayload.email)
        if(userByEmail) return[null,400,'Email ya existe']
        const [userByPhone] = await this.userPrismaRepository.findAllUsers(newPatientPayload.phoneNumber)
        if(userByPhone) return[null,400,'Email ya existe']*/
    const [newPatient, err] =
      await this.patientPrismaRepository.createNewPatient(newPatientPayload);
    if (err) return [null, 404, err];
    return [newPatient, 200, null];
  };
}
