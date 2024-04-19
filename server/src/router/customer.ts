import express from "express";

import { getCustomerInfo } from "../controller/customer";

export default (router: express.Router) => {
  router.get("/customer/:customerId", getCustomerInfo);
};
