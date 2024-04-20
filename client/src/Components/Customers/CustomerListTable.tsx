import React from "react";
import "./CustomerListTable.css";
import { Customer } from "../../models/Customer";
import { Link } from "react-router-dom";

type CustomerListTableProps = {
  customers: Customer[];
};

export default function CustomerListTable({
  customers,
}: CustomerListTableProps) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Current Tier</th>
            <th>Total Expense</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>
                <Link to={`/customer/${customer.id}`}>
                  View Customer Detail
                </Link>
              </td>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.tier}</td>
              <td>{customer.totalExpense}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
