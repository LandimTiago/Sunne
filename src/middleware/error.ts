import { NextFunction, Request, Response } from "express";
import { apiResponse } from "../utils/responseApi";

export const errorMiddleware = (err: unknown, res: Response): Response => {
  if (err instanceof SyntaxError) {
    return apiResponse(res, 400, err.message);
  }

  console.error("err", err);
  return apiResponse(res, 500, "Internal server error");
};
