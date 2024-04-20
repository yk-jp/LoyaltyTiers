import "./HomePage.css";
import CustomerListTable from "../../Components/Customers/CustomerListTable";

export default function HomePage() {
  return (
    <div>
      <h2>Customer List</h2>
      <CustomerListTable customers={[]} />
    </div>
  );
}
