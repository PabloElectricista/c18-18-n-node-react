import { getFormatDate } from "../../utils/functions/date.js";

export default class SpecialtyUseCases {
    constructor(specialtyPrismaRepository) {
      this.specialtyPrismaRepository = specialtyPrismaRepository;
    }
  
    findAllSpecialties = async () => {
        const [specialties, err] = await this.specialtyPrismaRepository.findAllSpecialties();
        if (err) return [null, 404, err];
        return [specialties, 200, null];
      };
  
    findSpecialtyById = async (specialtyId) => {
       const [specialty, err] = await this.specialtyPrismaRepository.findSpecialtyById(specialtyId);
        if (err) return [null, 404, err];
        if (!specialty) return [null, 404, 'Specialty not found'];
        return [specialty, 200, null];
      };
  
    createNewSpecialty = async (newSpecialtyPayload) => {
       const [newSpecialty, err] = await this.specialtyPrismaRepository.createNewSpecialty(newSpecialtyPayload);
          if (err) return [null, 404, err];
          return [newSpecialty, 200, null];
    };
  
    updateSpecialtyById = async (specialtyId, updateSpecialtyPayload) => {
       const [updatedSpecialty, err] = await this.specialtyPrismaRepository.updateSpecialty(specialtyId, updateSpecialtyPayload);
        if (err) return [null, 404, err];
        if (!updatedSpecialty) return [null, 404, 'Specialty not found'];
        return [updatedSpecialty, 200, null];
      };
  
    deleteSpecialtyById = async (specialtyId) => {
       const [deletedSpecialty, err] = await this.specialtyPrismaRepository.deleteSpecialty(specialtyId);
        if (err) return [null, 404, err];
        if (!deletedSpecialty) return [null, 404, 'Specialty not found'];
        return [deletedSpecialty, 200, null];
      };
    }
  
  
  