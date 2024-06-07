import prisma from "../infrastructure/prisma/prismaConfig.js";
import jwt from "jsonwebtoken";

import PatientPrismaRepository from "../adapters/repositories/patient-prisma-repository.js";
import DoctorPrismaRepository from "../adapters/repositories/doctor-prisma-repository.js";
import AppointmentPrismaRepository from "../adapters/repositories/appointments-prisma-repository.js";
import SchedulerPrismaRepository from "../adapters/repositories/scheduler-prisma-repository.js";

//Usecases
import PatientUseCases from "../application/usecases/patient-usecases.js";
import DoctorUseCases from "../application/usecases/doctor-usecases.js";
import AppointmentUseCases from "../application/usecases/appointment-usecases.js";
import SchedulerUseCases from "../application/usecases/scheduler-usecases.js";
import TokenUseCases from "../application/usecases/token-usecases.js";

//Handlers
import PatientHandler from "../adapters/http/user/patient-handler.js";
import Doctorhandler from "../adapters/http/user/doctor-handler.js";
import AppointmentHandler from "../adapters/http/appointment/appointment-handler.js";
import SchedulerHandler from "../adapters/http/scheduler/scheduler-handler.js";

//builder
import builder from "../application/builder/index.js";

//middleware
import TokenMiddleware from "../adapters/http/middleware/authentication.js";

//Intance-Repository
const patientPrismaRepository = new PatientPrismaRepository(prisma);
const doctorPrismaRepository = new DoctorPrismaRepository(prisma);
const appointmentsPrismaRepository = new AppointmentPrismaRepository(prisma);
const schedulerPrismaRepository = new SchedulerPrismaRepository(prisma);

//Intances-usecases
const tokenUseCases = new TokenUseCases(jwt);
const patientUseCases = new PatientUseCases(patientPrismaRepository);
const doctorUseCases = new DoctorUseCases(doctorPrismaRepository);
const schedulerUseCases = new SchedulerUseCases(schedulerPrismaRepository);
const appointmentUseCases = new AppointmentUseCases(
  appointmentsPrismaRepository,
  patientUseCases,
  //clinicUseCases,
  doctorUseCases,
  //specialtyUseCases,
  schedulerUseCases,
  schedulerPrismaRepository,
  builder
);
//instace-middleware
const tokenMiddleware = new TokenMiddleware(tokenUseCases);

//Intance-Handler
const patientHandler = new PatientHandler(patientUseCases, tokenUseCases);
const doctorHandler = new Doctorhandler(doctorUseCases, tokenUseCases);
const appointmentHandler = new AppointmentHandler(appointmentUseCases);
const schedulerHandler = new SchedulerHandler(schedulerUseCases);

export {
  patientHandler,
  appointmentHandler,
  schedulerHandler,
  doctorHandler,
  tokenMiddleware,
};
