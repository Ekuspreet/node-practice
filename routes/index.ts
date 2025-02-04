import express from "express";
import InfoController from "../controllers/info.controller";
import MaxController from "../controllers/max.controller";
MaxController;
const appRouter = express.Router();

appRouter.get("/info/:name", InfoController.getInfo);
appRouter.post("/info/:name", InfoController.setInfo);
appRouter.put("/info/:name", InfoController.updateInfo);
appRouter.delete("/info/:name", InfoController.removeInfo);
appRouter.post("/maximum", MaxController.maxFirst);
appRouter.post("/maximum/last", MaxController.maxLast);
export default appRouter;
