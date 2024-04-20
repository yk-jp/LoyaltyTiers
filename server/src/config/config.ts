/**
 * put all the config together here as there's not so much export data.
 * Default values are not considered.
 */

import * as dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config({
  path: `${__dirname}/../../.env`,
});

// config api port.
export const port: number = Number(process.env.API_PORT);

// config db connection. Add some cononection error handlings if time allows to do so.
export const db = new Pool({
  host: "db", // It must be the same as service name in the docker compose.
  port: Number(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

export const clientAddress: string = process.env.CLIENT_ADDRESS;
