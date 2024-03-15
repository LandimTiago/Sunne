import { Response, Router } from "express";
import { apiResponse } from "../utils/responseApi";

const notFoundRouter = Router();

notFoundRouter.all("*", (res: Response) => {
  return apiResponse(res, 404, "Route not Found!");
});

export { notFoundRouter };
