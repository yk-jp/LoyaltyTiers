import express from "express";
import http from "http";
import cors from "cors";
import * as schedule from "node-schedule";

import { port } from "./config/config";
import router from "./router";
import { periodicUpdate } from "./cronJob";

const app = express();

app.use(cors({})); // add cors settings for frontend later.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router()); // route for api endpoints

const server = http.createServer(app);

// run the update script at the last day of a year
schedule.scheduleJob("59 23 31 12 * *", periodicUpdate);
// schedule.scheduleJob("*/1 * * * *", periodicUpdate);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
