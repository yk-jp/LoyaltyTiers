import express from "express";

import customer from "./customer";
import order from "./order";

const router = express.Router();

export default (): express.Router => {
  customer(router);
  order(router);

  return router;
};
