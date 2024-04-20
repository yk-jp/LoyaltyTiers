import React from "react";
import "./CustomerListTable.css";

type OrderListTableProps = {
  customer: object;
  ordersTotal: number;
  orders: Array<object>;
};

export default function OrderListTable({
  customer,
  ordersTotal,
  orders,
}: OrderListTableProps) {
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
