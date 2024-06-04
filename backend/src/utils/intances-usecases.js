import prisma from "../infrastructure/prisma/prismaConfig.js";
//Repositories
import PatientPrismaRepository from "../adapters/repositories/patient-prisma-repository.js";
import AppointmentPrismaRepository from "../adapters/repositories/appointments-prisma-repository.js";

//Usecases
import PatientUseCases from "../application/usecases/patient-usecases.js";
import AppointmentUseCases from "../application/usecases/appointment-usecases.js";

//Handlers
import PatientHandler from "../adapters/http/user/patient-handler.js";
import AppointmentHandler from "../adapters/http/appointment/appointment-handler.js";

//builder
import builder from "../application/builder/index.js";

//Intance-Repository
const patientPrismaRepository = new PatientPrismaRepository(prisma);
const appointmentsPrismaRepository = new AppointmentPrismaRepository(prisma);

//Intances-usecases
const patientUseCases = new PatientUseCases(patientPrismaRepository);
const appointmentUseCases = new AppointmentUseCases(
  appointmentsPrismaRepository,
  patientUseCases,
  clinicUseCases,
  doctorUseCases,
  specialtyUseCases,
  builder
);

//Intance-Handler
const patientHandler = new PatientHandler(patientUseCases);
const appointmentHandler = new AppointmentHandler(appointmentUseCases);

export { patientHandler, appointmentHandler };
