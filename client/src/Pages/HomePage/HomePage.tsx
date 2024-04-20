import "./HomePage.css";
import CustomerListTable from "../../Components/Customers/CustomerListTable";
import { Customer } from "../../models/Customer";

export default function HomePage() {
  const customers: Customer[] = [
    {
      id: 1,
      name: "Mark",
      totalExpense: 500,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Adams",
      totalExpense: 460,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Lola",
      totalExpense: 0,
      tier: "Bronze",
    },
    {
      id: 1,
      name: "Mark",
      totalExpense: 500,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Adams",
      totalExpense: 460,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Lola",
      totalExpense: 0,
      tier: "Bronze",
    },
    {
      id: 1,
      name: "Mark",
      totalExpense: 500,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Adams",
      totalExpense: 460,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Lola",
      totalExpense: 0,
      tier: "Bronze",
    },
    {
      id: 1,
      name: "Mark",
      totalExpense: 500,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Adams",
      totalExpense: 460,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Lola",
      totalExpense: 0,
      tier: "Bronze",
    },
    {
      id: 1,
      name: "Mark",
      totalExpense: 500,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Adams",
      totalExpense: 460,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Lola",
      totalExpense: 0,
      tier: "Bronze",
    },
    {
      id: 1,
      name: "Mark",
      totalExpense: 500,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Adams",
      totalExpense: 460,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Lola",
      totalExpense: 0,
      tier: "Bronze",
    },
    {
      id: 1,
      name: "Mark",
      totalExpense: 500,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Adams",
      totalExpense: 460,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Lola",
      totalExpense: 0,
      tier: "Bronze",
    },
    {
      id: 1,
      name: "Mark",
      totalExpense: 500,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Adams",
      totalExpense: 460,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Lola",
      totalExpense: 0,
      tier: "Bronze",
    },
    {
      id: 1,
      name: "Mark",
      totalExpense: 500,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Adams",
      totalExpense: 460,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Lola",
      totalExpense: 0,
      tier: "Bronze",
    },
    {
      id: 1,
      name: "Mark",
      totalExpense: 500,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Adams",
      totalExpense: 460,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Lola",
      totalExpense: 0,
      tier: "Bronze",
    },
    {
      id: 1,
      name: "Mark",
      totalExpense: 500,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Adams",
      totalExpense: 460,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Lola",
      totalExpense: 0,
      tier: "Bronze",
    },
    {
      id: 1,
      name: "Mark",
      totalExpense: 500,
      tier: "Gold",
    },
    {
      id: 2,
      name: "Adams",
      totalExpense: 460,
      tier: "Silver",
    },
    {
      id: 3,
      name: "Lola",
      totalExpense: 0,
      tier: "Bronze",
    },
  ];
  return (
    <div className="justify-content-center align-items-center vh-100">
      <div>
        <h2 className="text-align-center">Customer List</h2>
        <div className="max-vh-80 max-w-100">
          <CustomerListTable customers={customers} />
        </div>
      </div>
    </div>
  );
}
