export default class ClinicPrismaRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }
  async findAllClinics() {
    try {
      const clinics = await this.prismaClient.clinic.findMany({});
      if (clinics.length === 0 || !clinics) {
        return [null, "There are not clinics fetched"];
      }
      return [clinics, null];
    } catch (error) {
      throw new Error(
        `there was a error in clinic-prisma-repository.findAllClinics ${error.message}`
      );
    }
  }

  async findClinicById(clinicId) {
    try {
      const clinic = await this.prismaClient.clinic.findFirst({
        where: { id: clinicId },
      });
      if (!clinic) {
        return [null, "Clinic not found"];
      }
      return [clinic, null];
    } catch (error) {
      throw new Error(
        `there was a error in clinic-prisma-repository.findClinicById ${error.message}`
      );
    }
  }

  async createNewClinic(newClinicPayload) {
    try {
      const clinic = await this.prismaClient.clinic.create({
        data: newClinicPayload,
      });
      return [clinic, null];
    } catch (error) {
      console.log(error);
      throw new Error(
        `there was a error in clinic-prisma-repository.createNewClinic ${error.message}`
      );
    }
  }

  async updateClinic(clinicId, updateClinicPayload) {
    try {
      const clinic = await this.prismaClient.clinic.update({
        where: { id: clinicId },
        data: updateClinicPayload,
      });
      return [clinic, null];
    } catch (error) {
      throw new Error(
        `there was a error in clinic-prisma-repository.updateClinic ${error.message}`
      );
    }
  }

  async deleteClinicById(clinicId) {
    try {
      const clinic = await this.prismaClient.clinic.delete({
        where: { id: clinicId },
      });
      return [null, "Clinic deleted successfully"];
    } catch (error) {
      throw new Error(
        `there was a error in clinic-prisma-repository.deleteClinicById ${error.message}`
      );
    }
  }
}
