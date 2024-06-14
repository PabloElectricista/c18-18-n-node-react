import 'dotenv/config';
import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
const fastify = Fastify({ logger: true });



import registerRoutes from "../src/utils/functions/register-routes.js";
import patientRoutes from "../../backend/src/adapters/http/user/patient-route.js";
import doctorRoutes from "../../backend/src/adapters/http/user/doctor-route.js";
import appointmentRoutes from "../../backend/src/adapters/http/appointment/appointment-route.js";
import schedulerRoutes from "../../backend/src/adapters/http/scheduler/scheduler-route.js";
import specialtyRoutes from "../../backend/src/adapters/http/specialty/specialty-route.js";
import clinicRoutes from "../../backend/src/adapters/http/clinic/clinic-route.js";
import authRoutes from "../../backend/src/adapters/http/auth/auth-route.js";

fastify.register(fastifyCors, {
  origin: "*",
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Accept",
    "Content-Type",
    "Authorization",
  ],
  methods: ["GET", "PUT", "PATCH", "POST", "DELETE"],
  credentials: true,
});

//Register Routes
fastify.get("/", (req, reply) => {
  reply.send("WELCOME TO AGENDA SALUD");
});

registerRoutes(fastify, patientRoutes);
registerRoutes(fastify, doctorRoutes);
registerRoutes(fastify, appointmentRoutes);
registerRoutes(fastify, schedulerRoutes);
registerRoutes(fastify, clinicRoutes);
registerRoutes(fastify, specialtyRoutes);
registerRoutes(fastify, authRoutes);


const start = async () => {
  try {
    const port = process.env.PORT || 3000
    await fastify.listen({ port, host: "localhost" });
    console.log({port})
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
