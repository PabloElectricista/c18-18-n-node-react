import { getFormatDate } from "../../utils/functions/date.js";
export default class DoctorUseCases {
  constructor(doctorPrismaRepository, tokenUseCases) {
    this.doctorPrismaRepository = doctorPrismaRepository;
    this.tokenUseCases = tokenUseCases;
  }

  findAllDoctors = async () => {
    const [doctors, err] = await this.doctorPrismaRepository.findAllDoctors();
    if (err) return [null, 404, err];
    return [doctors, 200, null];
  };

  findDoctorById = async (doctorid) => {
    const [doctor, err] = await this.doctorPrismaRepository.findDoctorById(
      doctorid
    );
    if (err) return [null, 404, err];
    if (!doctor) return [null, 404, "Doctor not found"];
    return [doctor, 200, null];
  };

  createNewDoctor = async (newDoctorPayload) => {
    const [doctorByEmail] = await this.doctorPrismaRepository.findDoctorByEmail(
      newDoctorPayload.email
    );
    if (doctorByEmail) return [null, 400, "Already exist email"];
    const [doctorByPhone] = await this.doctorPrismaRepository.findDoctorByPhone(
      newDoctorPayload.phone
    );
    if (doctorByPhone) return [null, 400, "Already exist Phone"];
 
    const newDoctorBody = { ...newDoctorPayload };
    newDoctorBody.created_at = getFormatDate();

    const [newDoctor, err] = await this.doctorPrismaRepository.createNewDoctor(
      newDoctorBody
    );
    if (err) return [null, 404, err];

    const [token, tokenError] = await this.tokenUseCases.generateToken(
      newDoctor.id,
      newDoctor.role
    );
    if (tokenError) return [null, 400, tokenError];

    return [newDoctor, token, 200, null];
  };

  updateDoctorById = async (doctorId, updateDoctorPayload) => {
    const [updatedDoctor, err] =
      await this.doctorPrismaRepository.updatedDoctor(
        doctorId,
        updateDoctorPayload
      );
    if (err) return [null, 404, err];
    if (!updatedDoctor) return [null, "Doctor not updated"];
    return [updatedDoctor, 200, null];
  };

  deleteDoctorById = async (doctorId) => {
    const [deletedDoctor, err] =
      await this.doctorPrismaRepository.deleteDoctorById(doctorId);
    if (err) return [null, 404, err];
    if (!deletedDoctor) return [null, "Doctor not deleted"];
    return [deletedDoctor, 200, null];
  };
}
