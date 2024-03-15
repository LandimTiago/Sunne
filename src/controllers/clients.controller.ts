import { InputParams } from "./../types/quantity";
import { Response, Request } from "express";
import { apiOut } from "../utils/responseApi";
import { clientsList } from "../services/clients.service";

async function getClientsList(req: Request, res: Response): Promise<Response> {
  const clientList = await clientsList(quantity);
  return apiOut(res, 200, clientList);
}

export { getClientsList };
