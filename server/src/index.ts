import express from "express";
import http from "http";
import cors from "cors";

import { port } from "./config/config";

const app = express();

app.use(cors({})); // add cors settings for frontend later.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
