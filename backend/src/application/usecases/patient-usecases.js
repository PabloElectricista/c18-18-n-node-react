export default class PatientUseCases {
  constructor(patientPrismaRepository) {
    this.patientPrismaRepository = patientPrismaRepository;
  }

  findAllPatients = async () => {
    const [patients, err] = await this.patientPrismaRepository.findAllPatients();
    if (err) return [null, 404, err];
    return [patients, 200, null];
  };

  findPatientById = async (patientid) => {
    const[patient, err] = await this.patientPrismaRepository.findPatientById(patientid);
        if (err) return [null, 404, err];
        if (!patient) return [null, 404, 'Patient not found'];
         return [patient, 200, null];
};


  createNewPatient = async (newPatientPayload) => {
    const [patientByEmail] = await this.patientPrismaRepository.findAllPatients(newPatientPayload.email);
        if(patientByEmail) return[null,400,'Already exist email']
    const [patientById] = await this.userPrismaRepository.findAllPatients(newPatientPayload.patientid);
        if(patientById) return[null,400,'Already exist id']
    const [newPatient, err] = await this.patientPrismaRepository.createNewPatient(newPatientPayload);
        if (err) return [null, 404, err];
         return [newPatient, 200, null];
  };

  updatePatientById = async (patientid, updatePatientPayload) => {
    const [updatedPatient, err] = await this.patientPrismaRepository.updatedPatient(patientid, updatePatientPayload);
        if (err) return [null, 404, err];
        if (!updatedPatient) return [null, 'Patient not found'];
         return [updatedPatient, 200, null];
};

deletePatientById = async (patientid) => {
    const [deletedPatient, err] = await this.patientPrismaRepository.deletedPatient(patientid);
        if (err) return [null, 404, err];
        if (!deletedPatient) return [null, 'Patient no deleted'];
         return [deletedPatient, 200, null];
};

}
