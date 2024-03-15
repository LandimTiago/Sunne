import { Response, Request } from "express";
import { apiResponse } from "../utils/responseApi";
import { clientsList } from "../services/clients.service";
import { querySchema } from "../validators/client.validation";

async function getClientsList(req: Request, res: Response): Promise<Response> {
  const query = req.query;

  console.log("Query", query);

  const { value, error } = querySchema.validate(query);
  if (error) apiResponse(res, 400, error.details[0].message);

  const clientList = await clientsList(value);
  return apiResponse(res, 200, clientList);
}

export { getClientsList };
