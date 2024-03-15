import { Router } from "express";
import { getClientsList } from "../controllers/clients.controller";

const clientRoutes = Router();

clientRoutes.get("/list", getClientsList);

export { clientRoutes };
