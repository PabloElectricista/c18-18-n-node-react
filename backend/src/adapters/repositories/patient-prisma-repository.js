export default class PatientPrismaRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async findAllPatients() {
    try {
      const patients = await this.prismaClient.patients.findMany({});
      if (patients.length === 0 || !patients)
        return [null, "There are not patients fetched"];
      return [patients, null];
    } catch (error) {
      throw new Error(
        `there was a error in patient-prisma-repository.findAllPatient ${error.message}`
      );
    }
  }

  async createNewPatient(newPatientPayload) {
    try {
      const patient = await this.prismaClient.patients.create({
        data: newPatientPayload,
      });
      return [patient, null];
    } catch (error) {
      throw new Error(
        `there was a error in patient-prisma-repository.createNewPatient ${error.message}`
      );
    }
  }
}
