import express from "express";

import { rootRouter } from "./routes";

import { corsConfig, errorMiddleware } from "./middleware";

import "./utils/dotenv";

const app = express();

const { PORT } = process.env;

app.listen(PORT, () => {
  app.use(express.json());
  app.use(corsConfig);
  app.use("/", rootRouter);
  console.info(`[SERVER] Server on port ${PORT}`);
});
