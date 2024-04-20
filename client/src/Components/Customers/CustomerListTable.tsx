import React from "react";
import "./CustomerListTable.css";

type CustomerListTableProps = {
  customers: object;
};

export default function CustomerListTable({
  customers,
}: CustomerListTableProps) {
  return (
    <div>
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
