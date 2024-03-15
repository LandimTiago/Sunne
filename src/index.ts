import express from "express";

import './utils/dotenv'
import { rootRouter } from "./routes";

const app = express();

const { PORT } = process.env;

app.use(express.json())

app.listen(PORT, () => {

  app.use('/', rootRouter)

  console.log(`[SERVER] Server on port ${PORT}`);
});

