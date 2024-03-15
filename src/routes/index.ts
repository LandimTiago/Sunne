import { Router } from "express";
import { clientRoutes } from "./client.routes";
import { notFoundRouter } from "./notFound.routes";

const rootRouter = Router();

rootRouter.use("/clients", clientRoutes);
rootRouter.use("*", notFoundRouter);

export { rootRouter };
