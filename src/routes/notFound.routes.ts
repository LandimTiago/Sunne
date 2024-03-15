import { Response, Router } from "express";
import { apiOut } from "../utils/responseApi";

const notFoundRouter = Router();

notFoundRouter.all("*", (res: Response) => {
  return apiOut(res, 404, "Route not Found!");
});

export { notFoundRouter };
