import express from "express";

import { getCustomerList, getCustomerInfo } from "../controller/customer";

export default (router: express.Router) => {
  router.get("/customers", getCustomerList);
  router.get("/customer/:customerId", getCustomerInfo);
};
