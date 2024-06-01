import Fastify from "fastify";
const fastify = Fastify({ logger: true });

export default function registerRoutes(fastify, routes) {
  routes.forEach((route) => {
    fastify.route(route);
  });
}
