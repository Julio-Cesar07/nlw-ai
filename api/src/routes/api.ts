import { FastifyInstance } from "fastify";

export async function apiRoute(app: FastifyInstance) {
  app.get("/api", () => {
    return "ok";
  });
}
