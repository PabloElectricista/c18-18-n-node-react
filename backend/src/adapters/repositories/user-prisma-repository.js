module.exports = class UserPrismaRepository{
    constructor(prismaClient){
        this.prismaClient = prismaClient;
    }

    async findAllUsers(){
        try {
            const users = await this.prismaClient.user.findMany({});
        } catch (error) {
            
        }
    }
}