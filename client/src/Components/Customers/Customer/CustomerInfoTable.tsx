import React from "react";
import "./CustomerInfoTable.css";

type CustomerInfoTableProps = {
  customer: object;
  ordersTotal: number;
  orders: Array<object>;
};

export default function CustomerInfoTable({
  customer,
  ordersTotal,
  orders,
}: CustomerInfoTableProps) {
  return (
    <div>
      <h2>Order history</h2>
      <h2>Customer name : items number items ordered in total</h2>
      <table>
        <tr>
          <th>Order ID</th>
          <th>Expense</th>
          <th>Date</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </table>
    </div>
  );
}
