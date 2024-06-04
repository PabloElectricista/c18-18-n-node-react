export default class SchedulerPrismaRepository {
  constructor(prismaClient) {
    this.prismaClient = prismaClient;
  }

  async findAllSchedulers() {
    try {
      const schedulers = await this.prismaClient.scheduler.findMany({});
      if (schedulers.length === 0 || !schedulers)
        return [null, `there are not schedulers fetched`];
      return [schedulers, null];
    } catch (error) {
      throw new Error(
        `there was a error in scheduler-prisma-repository.findAllScheduler err: ${error.message}`
      );
    }
  }
  async findSchedulersByDate(dateFrom, dateTo) {
    try {
      const schedulers = await this.prismaClient.scheduler.findMany({
        where: {
          created_at: {
            gte: dateFrom,
            lte: dateTo,
          },
        },
      });
      if (schedulers.length === 0 || !schedulers)
        return [null, `there are not schedulers fetched`];
      return [schedulers, null];
    } catch (error) {
      throw new Error(
        `there was a error in scheduler-prisma-repository.findAllScheduler err: ${error.message}`
      );
    }
  }
  async findSchedulerById(schedulerId) {
    try {
      const scheduler = await this.prismaClient.scheduler.findFirst({
        where: { id: schedulerId },
      });
      if (!scheduler) return [null, `Scheduler not found`];
      return [scheduler, null];
    } catch (error) {
      throw new Error(
        `there was a error in scheduler-prisma-repository.findSchedulerById err: ${error.message}`
      );
    }
  }

  async createNewScheduler(newScheduler) {
    try {
      const scheduler = await this.prismaClient.scheduler.createMany({
        data: newScheduler,
      });
      return [scheduler, null];
    } catch (error) {
      throw new Error(
        `there was a error in scheduler-prisma-repository.createNewScheduler err: ${error.message}`
      );
    }
  }

  async updateScheduler(schedulerId, scheduler) {
    try {
      const updateScheduler = await this.prismaClient.scheduler.update({
        where: { id: schedulerId },
        data: scheduler,
      });
      return [updateScheduler, null];
    } catch (error) {
      throw new Error(
        `there was a error in scheduler-prisma-repository.updateScheduler err: ${error.message}`
      );
    }
  }
  async deleteScheduler(schedulerId) {
    try {
      const deletescheduler = await this.prismaClient.scheduler.delete({
        where: { id: schedulerId },
      });
      return [deletescheduler, null];
    } catch (error) {
      throw new Error(
        `there was a error in scheduler-prisma-repository.deleteScheduler err: ${error.message}`
      );
    }
  }
}
