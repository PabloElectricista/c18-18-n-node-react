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

export {patientHandler};


//Repositories
import DoctorPrismaRepository from "../adapters/repositories/doctor-prisma-repository.js";

//Usecases
import DoctorUseCases from "../application/usecases/doctor-usecases.js"

//Handlers
import Doctorhandler from "../adapters/http/user/doctor-handler.js";

//Intance-Repository
const doctorPrismaRepository = new DoctorPrismaRepository(prisma);

//Intances-usecases
const doctorUseCases = new DoctorUseCases(patientPrismaRepository);

//Intance-Handler
const doctorHandler = new Doctorhandler(patientUseCases);

export  {doctorHandler};




