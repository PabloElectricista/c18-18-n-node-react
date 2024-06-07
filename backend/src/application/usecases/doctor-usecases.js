export default class DoctorUseCases {
    constructor(doctorPrismaRepository){
        this.doctorPrismaRepository = doctorPrismaRepository;
}

findAllDoctors = async () => {
    const [doctors, err] = await this.doctorPrismaRepository.findAllDoctors();
        if (err) return [null, 404, err];
         return [doctors, 200, null];
};

findDoctorById = async (doctorid) => {
    const[doctor, err] = await this.doctorPrismaRepository.findDoctorById(doctorid);
        if (err) return [null, 404, err];
        if (!doctor) return [null, 404, 'Doctor not found'];
         return [doctor, 200, null];
};

createNewDoctor = async (newDoctorPayload) => {
    const [doctorByEmail] = await this.doctorPrismaRepository.findDoctorByEmail(newDoctorPayload.email)
        if(doctorByEmail) return[null,400,'Already exist email'];
    const [doctorByPhone] = await this.doctorPrismaRepository.findDoctorByPhone(newDoctorPayload.phone)
        if(doctorByPhone) return[null,400,'Already exist Phone'];
    const [newDoctor, err] = await this.doctorPrismaRepository.createNewDoctor(newDoctorPayload);
        if (err) return [null, 404, err];
         return [newDoctor, 200, null];
};

updateDoctorById = async (doctorId, updateDoctorPayload) => {
    const [updatedDoctor, err] = await this.doctorPrismaRepository.updatedDoctor(doctorId, updateDoctorPayload);
        if (err) return [null, 404, err];
        if (!updatedDoctor) return [null, 'Doctor not found'];
         return [updatedDoctor, 200, null];
};

deleteDoctorById = async (doctorId) => {
    const [deletedDoctor, err] = await this.doctorPrismaRepository.deletedDoctor(doctorId);
        if (err) return [null, 404, err];
        if (!deletedDoctor) return [null, 'Doctor not found'];
         return [deletedDoctor, 200, null];
};

}

