import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import { openapiSpecification } from "../utils/swaggerConfig";

const swaggerRouter = Router();

swaggerRouter.use("/", swaggerUi.serve);
swaggerRouter.get("/", swaggerUi.setup(openapiSpecification));

export { swaggerRouter };
