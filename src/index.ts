import express from "express";

import "./utils/dotenv";
import { rootRouter } from "./routes";
import { requestLogger } from "./utils/logger";

const app = express();

const { PORT } = process.env;

app.use(express.json());

app.listen(PORT, () => {
  app.use(requestLogger);
  app.use("/", rootRouter);

  console.log(`[SERVER] Server on port ${PORT}`);
});
