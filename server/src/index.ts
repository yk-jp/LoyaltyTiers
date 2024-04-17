import express from "express";
import http from "http";
import cors from "cors";

import { port } from "./config/config";
import router from "./router";

const app = express();

app.use(cors({})); // add cors settings for frontend later.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router()); // route for api endpoints

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
