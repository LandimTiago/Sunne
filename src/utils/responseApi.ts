import { Response } from "express";

function apiOut(res: Response, code: number, data: unknown): Response {
  console.info(`[RESPONSE] --> Code: ${code}, Data:`, data);
  if (code >= 400 && code < 500) {
    return res.status(code).json({ data });
  }
  if (code >= 500 && code < 600) {
    return res.status(code).json("Internal server error");
  }
  if (code >= 200 && code < 300) {
    return res.status(code).json({ data });
  }
  throw new Error("Status code not implemented on apiOut");
}

export { apiOut };
