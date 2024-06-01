import Fastify from "fastify";
import fastifyCors from "@fastify/cors";
const fastify = Fastify({ logger: true });

import patientRoutes from "../../backend/src/adapters/http/user/patient-route.js";
import registerRoutes from "../../backend/src/utils/functions/register-routes.js";

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

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: "localhost" });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
