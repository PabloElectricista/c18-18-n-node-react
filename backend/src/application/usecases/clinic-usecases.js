export default class ClinicUseCases {
    constructor( clinicPrismaRepository ) {
      this.clinicPrismaRepository = clinicPrismaRepository;
    }
    findAllClinics = async () => {
      const [clinics, error] = await this.clinicPrismaRepository.findAllClinics();
      if (error) return [null, 404, error];
  
      return [clinics, 200, null];
    };
  
    findClinicById = async (clinicId) => {
      const [clinic, error] = await this.clinicPrismaRepository.findClinicById(
        clinicId
      );
      if (error) return [null, 404, error];
      if (!clinic) return [null, 404, "clinic not found"];
      return [clinic, 200, null];
    };
  
    createNewClinic = async (newClinicPayload) => {
      const [clinic, error] = await this.clinicPrismaRepository.createNewClinic(
        newClinicPayload
      );
      if (error) return [null, 404, error];
      return [clinic, 200, null];
    };
  
    updateClinic = async (clinicId, updateClinicPayload) => {
      const [clinic, error] = await this.clinicPrismaRepository.updateClinic(
        clinicId,
        updateClinicPayload
      );
      if (error) return [null, 404, error];
      return [clinic, 200, null];
    };
  
    deleteClinicById = async (clinicId) => {
      const [clinic, error] = await this.clinicPrismaRepository.deleteClinicById(
        clinicId
      );
      if (error) return [null, 404, error];
      return [clinic, 200, null];
    };
  }
  