export default class AppointmentPrismaRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async findAllAppointments() {
    try {
      const appointments = await this.prismaClient.appointments.findMany({
        include: {
          doctor: true,
          Specialties: true,
          Patients: true,
        },
      });

      if (appointments.length === 0 || !appointments)
        return [null, `there are not appointment fetched`];
      return [appointments, null];
    } catch (error) {
      throw new Error(
        `there was a error in appointment-prisma-repository.findAllAppointments err: ${error.message}`
      );
    }
  }
  async findAppointmentById(appointmentId) {
    try {
      const appointment = await this.prismaClient.appointments.findFirst({
        where: { id: appointmentId },
        include: {
          doctor: true,
          Specialties: true,
          Patients: true,
        },
      });
      if (!appointment) return [null, `Appointment not found`];
      return [appointment, null];
    } catch (error) {
      throw new Error(
        `there was a error in appointment-prisma-repository.findAppointmentById err: ${error.message}`
      );
    }
  }
  async findAppointmentByUser(userId) {
    try {
      const userInAppointment = await this.prismaClient.appointments.findMany({
        where: { user_id: userId },
        include: {
          doctor: true,
          Specialties: true,
          Patients: true,
        },
      });
      if (!userInAppointment || userInAppointment.length === 0)
        return [null, `User into appointment not found`];
      return [userInAppointment, null];
    } catch (error) {
      throw new Error(
        `there was a error in appointment-prisma-repository.findAppointmentByUser err: ${error.message}`
      );
    }
  }
  async createNewAppointment(newAppointment) {
    try {
      const appointment = await this.prismaClient.appointments.create({
        data: newAppointment,
      });
      return [appointment, null];
    } catch (error) {
      throw new Error(
        `there was a error in appointment-prisma-repository.createNewAppointment err: ${error.message}`
      );
    }
  }
  async updateAppointment(appointmentId, appointment) {
    try {
      const updateAppointment = await this.prismaClient.appointments.update({
        where: { id: appointmentId },
        data: appointment,
      });
      return [updateAppointment, null];
    } catch (error) {
      throw new Error(
        `there was a error in appointment-prisma-repository.updateAppointment err: ${error.message}`
      );
    }
  }
  async deleteAppointment(appointmentId, payloadAppointment) {
    try {
      const deleteAppointment = await this.prismaClient.appointments.update({
        where: { id: appointmentId },
        data: payloadAppointment,
      });
      return [deleteAppointment, null];
    } catch (error) {
      throw new Error(
        `there was a error in appointment-prisma-repository.deleteAppointment err: ${error.message}`
      );
    }
  }
}
