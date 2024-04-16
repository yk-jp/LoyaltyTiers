import express from "express";

import { saveOrder } from "../controller/order";

export default (router: express.Router) => {
  router.post("/order/complete", saveOrder);
};
