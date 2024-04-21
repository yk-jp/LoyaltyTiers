import React from "react";
import "./OrderListTable.css";
import { Order } from "../../models/Order";
import { Link } from "react-router-dom";

type OrderListTableProps = {
  orders: Order[];
};

export default function OrderListTable({ orders }: OrderListTableProps) {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Expense</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.total_cents}</td>
              <td>{String(order.ordered_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
