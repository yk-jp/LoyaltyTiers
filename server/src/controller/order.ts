import express from "express";

import { db } from "../config/config";
import { CompleteOrderDto } from "dtos/Order.dto";
import { GetCustomerOrderParams } from "types/queryParams";

/**
 * circle back here to extend this api for pagination if there's time left.
 */
export const getCustomerOrder = async (
  req: express.Request<GetCustomerOrderParams, {}, {}, {}>, // type annotatation for request params
  res: express.Response
) => {
  const params: GetCustomerOrderParams = req.params;
  const customerId: number = params.customerId;

  try {
    // don't join here as the data here is not expected to be big and it makes it easier to handle data operations when orders data doesn't exist.
    const customerData = await db.query(
      "SELECT id, name FROM customers WHERE id = $1",
      [customerId]
    );
    const ordersData = await db.query(
      "SELECT id, total_cents, ordered_at " +
        "FROM orders " +
        "WHERE customer_id = $1 AND ordered_at >= DATE_TRUNC('year', CURRENT_DATE) - INTERVAL '1 year'",
      [customerId]
    );
    // validation and response annotation if there's time left.
    const customer = customerData.rows[0];

    res.status(200).json({
      message: "OK",
      customer: customer,
      orders: ordersData.rows,
      total: ordersData.rows.length,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

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
