import express from "express";

import { getCustomerOrder, saveOrder } from "../controller/order";

export default (router: express.Router) => {
  router.get("/order/:customerId", getCustomerOrder);
  router.post("/order/complete", saveOrder);
};
