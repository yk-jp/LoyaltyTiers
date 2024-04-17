import express from "express";

import { db } from "../config/config";
import { CompleteOrderDto } from "dtos/Order.dto";

export const saveOrder = async (
  req: express.Request<{}, {}, CompleteOrderDto>, // type annotate request body
  res: express.Response
) => {
  const orderDetails: CompleteOrderDto = req.body;
  try {
    await db.query(
      "INSERT INTO orders (id, customer_id, total_cents, ordered_at) " +
        "VALUES($1, $2, $3, $4)",
      [
        orderDetails.customerId,
        orderDetails.customerId,
        orderDetails.totalInCents,
        orderDetails.date,
      ]
    );
  } catch (e) {
    res.sendStatus(500);
  }

  res.sendStatus(200);
};
