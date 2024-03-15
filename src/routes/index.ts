import { Router } from "express";
import { clientRoutes } from "./client.routes";
import { notFoundRouter } from "./notFound.routes";
import { swaggerRouter } from "./swagger.routes";

const rootRouter = Router();

rootRouter.use("/clients", clientRoutes);
rootRouter.use("/docs", swaggerRouter);
rootRouter.use("*", notFoundRouter);

export { rootRouter };
