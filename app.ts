import express from "express";
import bodyParser from "body-parser";
import appRouter from "./routes";

const createServer = (): express.Application => {
  // Creating express application
  const app = express();
  // Body Parsing Middleware
  app.use(bodyParser.json());
  // Parse Incoming Requests as JSON
  app.use(express.json());

  // Routes
  app.use("/api", appRouter);
  return app;
};
export default createServer;
