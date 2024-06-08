export default class SpecialtyPrismaRepository {
    constructor(prismaClient) {
      this.prismaClient = prismaClient;
    }
  
    async findAllSpecialties() {
      try {
        const specialties = await this.prismaClient.specialties.findMany({});
        if (specialties.length === 0 || !specialties) {
          return [null, "There are no specialties fetched"];
        }
        return [specialties, null];
      } catch (error) {
        console.error(error);
        throw new Error(
          `There was an error in specialty-prisma-repository.findAllSpecialties: ${error.message}`
        );
      }
    }
  
    async findSpecialtyById(specialtyId) {
      try {
        const specialty = await this.prismaClient.specialties.findUnique({
          where: { id: specialtyId },
        });
        if (!specialty) {
          return [null, "Specialty not found"];
        }
        return [specialty, null];
      } catch (error) {
        console.error(error);
        throw new Error(
          `There was an error in specialty-prisma-repository.findSpecialtyById: ${error.message}`
        );
      }
    }
  
    async createNewSpecialty(newSpecialtyPayload) {
      try {
        const specialty = await this.prismaClient.specialties.create({
          data: newSpecialtyPayload,
        });
        return [specialty, null];
      } catch (error) {
        console.error(error);
        throw new Error(
          `There was an error in specialty-prisma-repository.createNewSpecialty: ${error.message}`
        );
      }
    }
  
    async updateSpecialty(specialtyId, updateSpecialtyPayload) {
      try {
        const specialty = await this.prismaClient.specialties.update({
          where: { id: specialtyId },
          data: updateSpecialtyPayload,
        });
        return [specialty, null];
      } catch (error) {
        console.error(error);
        throw new Error(
          `There was an error in specialty-prisma-repository.updateSpecialty: ${error.message}`
        );
      }
    }
  
    async deleteSpecialty(specialtyId) {
      try {
        const specialty = await this.prismaClient.specialties.delete({
          where: { id: specialtyId },
        });
        return [specialty, null];
      } catch (error) {
        console.error(error);
        throw new Error(
          `There was an error in specialty-prisma-repository.deleteSpecialty: ${error.message}`
        );
      }
    }
  }
  