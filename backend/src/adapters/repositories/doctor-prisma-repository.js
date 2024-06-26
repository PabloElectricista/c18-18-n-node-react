export default class DoctorPrismaRepository{
    constructor(prismaClient){
        this.prismaClient = prismaClient;
    }

    async findAllDoctors(){
        try {
            const doctors = await this.prismaClient.doctors.findMany({});
            if (doctors.length === 0 || !doctors) {
              return[null, "There are not doctors fetched"];
            }
            return[doctors, null];
        } catch (error) {
          throw new Error(
                `there was a error in doctors-prisma-repository.findAllDoctors ${error.message}`
            );
            
        }
    }

    
    async findDoctorById(doctorId) {
        try {
            const doctor = await this.prismaClient.doctors.findUnique({
                where: {id: doctorId},
            });
            if (!doctor) {
                return[null, "Doctor not found"];
            }
            return [doctor, null];
        } catch (error) {
            throw new Error(
                `there was a error in doctor-prisma-repository.findDoctorById ${error.message}`
            );
        }
    }
    async findDoctorByEmail(doctorEmail) {
        try {
            const doctor = await this.prismaClient.doctors.findUnique({
                where: {email: doctorEmail},
            });
            if (!doctor) {
                return[null, "Doctor not found"];
            }
            return [doctor, null];
        } catch (error) {
            throw new Error(
                `there was a error in doctor-prisma-repository.findDoctorByEmail ${error.message}`
            );
        }
    }
    async findDoctorByPhone(doctorPhone) {
        try {
            const doctor = await this.prismaClient.doctors.findUnique({
                where: {phone: doctorPhone},
            });
            if (!doctor) {
                return[null, "Doctor not found"];
            }
            return [doctor, null];
        } catch (error) {
            throw new Error(
                `there was a error in doctor-prisma-repository.findDoctorByPhone ${error.message}`
            );
        }
    }


    async createNewDoctor(newDoctorPayload){
        try {
            const doctor = await this.prismaClient.doctors.create({
               data: newDoctorPayload,
            }); 
            return [doctor, null];
        } catch (error) {
          throw new Error(
            `there was a error in doctor-prisma-repository.createNewDoctor ${error.message}`
          );  
        }
    }


    async updateDoctor (doctorId, updateDoctorPayload) {
        try {
            const doctor = await this.prismaClient.doctors.update({
                where: {id: doctorId},
                data: updateDoctorPayload,
            });
            return [doctor, null];
        } catch (error) {
              throw new Error(
                `there was a error in doctor-prisma-repository.updateDoctorById ${error.message}`
              );
        }
    }


    async deleteDoctorById(doctorid){
        try {
             await this.prismaClient.doctors.delete({
                where: { id: doctorid},
            });
            return[null, "Doctor deleted successfully"];
        } catch (error) {
            throw new Error(
                `there was a error in doctor-prisma-repository.deleteDoctor ${error.message}`
            );
        }
    }


}