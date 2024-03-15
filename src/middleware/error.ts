import { NextFunction, Request, Response } from "express";
import { SanitizationError } from "../utils/sanitizations";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || "Something went wrong";

  res.status(errStatus).json({ message: errMsg });
};

export default errorHandler;
