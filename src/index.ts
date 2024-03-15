import express from "express";

import { rootRouter } from "./routes";

import { corsConfig } from "./middleware";

import "./utils/dotenv";

const app = express();

const { PORT } = process.env;

app.use(express.json());
app.use(corsConfig);

app.listen(PORT, () => {
  app.use("/", rootRouter);

  console.log(`[SERVER] Server on port ${PORT}`);
});
