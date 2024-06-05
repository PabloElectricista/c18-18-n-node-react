import prisma from "../infrastructure/prisma/prismaConfig.js";

//Repositories
import PatientPrismaRepository from "../adapters/repositories/patient-prisma-repository.js";
import DoctorPrismaRepository from "../adapters/repositories/doctor-prisma-repository.js";

//Usecases
import PatientUseCases from "../application/usecases/patient-usecases.js";
import DoctorUseCases from "../application/usecases/doctor-usecases.js"

//Handlers
import PatientHandler from "../adapters/http/user/patient-handler.js";
import Doctorhandler from "../adapters/http/user/doctor-handler.js";

//Intance-Repository
const patientPrismaRepository = new PatientPrismaRepository(prisma);
const doctorPrismaRepository = new DoctorPrismaRepository(prisma);

//Intances-usecases
const patientUseCases = new PatientUseCases(patientPrismaRepository);
const doctorUseCases = new DoctorUseCases(doctorPrismaRepository);
//Intance-Handler
const patientHandler = new PatientHandler(patientUseCases);
const doctorHandler = new Doctorhandler(doctorUseCases);

export {patientHandler,doctorHandler};





