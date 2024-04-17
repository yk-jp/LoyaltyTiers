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
        orderDetails.orderId,
        orderDetails.customerId,
        orderDetails.totalInCents,
        orderDetails.date,
      ]
    );
    res.status(200).json({ message: "Your order was successfully received." });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
