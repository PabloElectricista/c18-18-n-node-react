import prisma from "../infrastructure/prisma/prismaConfig.js";
//Repositories
import PatientPrismaRepository from "../adapters/repositories/patient-prisma-repository.js";

//Usecases
import PatientUseCases from "../application/usecases/patient-usecases.js";

//Handlers
import PatientHandler from "../adapters/http/user/patient-handler.js";

//Intance-Repository
const patientPrismaRepository = new PatientPrismaRepository(prisma);

//Intances-usecases
const patientUseCases = new PatientUseCases(patientPrismaRepository);

//Intance-Handler
const patientHandler = new PatientHandler(patientUseCases);

export default patientHandler;
