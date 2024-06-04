export default class PatientPrismaRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async findAllPatients() {
    try {
      const patients = await this.prismaClient.patients.findMany({});
      if (patients.length === 0 || !patients) {
        return [null, "There are no patients fetched"];
      }
      return [patients, null];
    } catch (error) {
      throw new Error(
        `There was an error in patient-prisma-repository.findAllPatients: ${error.message}`
      );
    }
  }

  async findPatientById(patientid) {
    try {
      const patient = await this.prismaClient.patients.findUnique({
        where: { id: patientid },
      });
      if (!patient) {
        return [null, "Patient not found"];
      }
      return [patient, null];
    } catch (error) {
      console.error(error);
      throw new Error(
        `There was an error in patient-prisma-repository.findPatientById: ${error.message}`
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
      console.error(error);
      throw new Error(
        `There was an error in patient-prisma-repository.createNewPatient: ${error.message}`
      );
    }
  }

  async updatePatient(patientid, updatePatientPayload) {
    try {
      const patient = await this.prismaClient.patients.update({
        where: { id: patientid },
        data: updatePatientPayload,
      });
      return [patient, null];
    } catch (error) {
      console.error(error);
      throw new Error(
        `There was an error in patient-prisma-repository.updatePatient: ${error.message}`
      );
    }
  }

  async deletePatient(patientid) {
    try {
      const patient = await this.prismaClient.patients.delete({
        where: { id: patientid },
      });
      return [patient, null];
    } catch (error) {
      console.error(error);
      throw new Error(
        `There was an error in patient-prisma-repository.deletePatient: ${error.message}`
      );
    }
  }
}
