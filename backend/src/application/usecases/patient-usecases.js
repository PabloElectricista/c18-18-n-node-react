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
    const [newPatient, err] =
      await this.patientPrismaRepository.createNewPatient(newPatientPayload);
    if (err) return [null, 404, err];
    return [newPatient, 200, null];
  };
}
