import { Response, Request } from "express";
import { apiResponse } from "../utils/responseApi";
import { clientsList } from "../services/clients.service";
import { sanitize } from "../utils/sanitizations";
import { clientValidations } from "../validators/client.validation";

async function getClientsList(req: Request, res: Response): Promise<Response> {
  const { quantity } = sanitize(req.query, clientValidations.quantity);

  const clientList = await clientsList(quantity);
  return apiResponse(res, 200, clientList);
}

export { getClientsList };
