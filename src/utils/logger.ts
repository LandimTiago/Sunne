import { NextFunction, Request, Response } from "express";

function requestLogger(req: Request, res: Response, next: NextFunction): void {
  console.info(
    `[REQUEST] ${req.url} --> params:`,
    req.params,
    "body:",
    req.body
  );
  next();
}

export { requestLogger };
