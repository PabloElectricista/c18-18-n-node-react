import prisma from "../infrastructure/prisma/prismaConfig.js";

import PatientPrismaRepository from "../adapters/repositories/patient-prisma-repository.js";
import DoctorPrismaRepository from "../adapters/repositories/doctor-prisma-repository.js";
import AppointmentPrismaRepository from "../adapters/repositories/appointments-prisma-repository.js";
import SchedulerPrismaRepository from "../adapters/repositories/scheduler-prisma-repository.js";
import SpecialtyPrismaRepository from "../adapters/repositories/specialties-prisma-repository.js";
//Usecases
import PatientUseCases from "../application/usecases/patient-usecases.js";
import DoctorUseCases from "../application/usecases/doctor-usecases.js"
import AppointmentUseCases from "../application/usecases/appointment-usecases.js";
import SchedulerUseCases from "../application/usecases/scheduler-usecases.js";
import SpecialtyUseCases from "../application/usecases/specialties-usecases.js";

//Handlers
import PatientHandler from "../adapters/http/user/patient-handler.js";
import Doctorhandler from "../adapters/http/user/doctor-handler.js";
import AppointmentHandler from "../adapters/http/appointment/appointment-handler.js";
import SchedulerHandler from "../adapters/http/scheduler/scheduler-handler.js";
import SpecialtyHandler from "../adapters/http/user/specialty-handler.js";

//builder
import builder from "../application/builder/index.js";

//Intance-Repository
const patientPrismaRepository = new PatientPrismaRepository(prisma);
const doctorPrismaRepository = new DoctorPrismaRepository(prisma);
const appointmentsPrismaRepository = new AppointmentPrismaRepository(prisma);
const schedulerPrismaRepository = new SchedulerPrismaRepository(prisma);
const specialtyPrismaRepository = new SpecialtyPrismaRepository(prisma);

//Intances-usecases
const patientUseCases = new PatientUseCases(patientPrismaRepository);
const doctorUseCases = new DoctorUseCases(doctorPrismaRepository);
const appointmentUseCases = new AppointmentUseCases(
  appointmentsPrismaRepository,
  patientUseCases,
  //clinicUseCases,
  // doctorUseCases,
  //specialtyUseCases,
  builder
);
const schedulerUseCases = new SchedulerUseCases(schedulerPrismaRepository);
const specialtyUseCases = new SpecialtyUseCases(specialtyPrismaRepository);

//Intance-Handler
const patientHandler = new PatientHandler(patientUseCases);
const doctorHandler = new Doctorhandler(doctorUseCases);
const appointmentHandler = new AppointmentHandler(appointmentUseCases);
const schedulerHandler = new SchedulerHandler(schedulerUseCases);
const specialtyHandler = new SpecialtyHandler(specialtyUseCases);

export {patientHandler, doctorHandler, appointmentHandler, schedulerHandler, specialtyHandler};

