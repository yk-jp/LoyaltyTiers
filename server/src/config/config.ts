import * as dotenv from "dotenv";

dotenv.config({
  path: `${__dirname}/../../.env`,
});

export const port: number = Number(process.env.API_PORT);
