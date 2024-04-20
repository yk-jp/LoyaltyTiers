import "./HomePage.css";
import CustomerListTable from "../../Components/Customers/CustomerListTable";
import { Customer } from "../../models/Customer";
import { useEffect, useState } from "react";
import { getCustomerList } from "../../Apis/customer";

export default function HomePage() {
  let [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomerList = async () => {
      try {
        const data = await getCustomerList();
        if (!data.customers) {
          return;
        }
        setCustomers(data.customers);
      } catch (error) {
        console.error("Error fetching customer list:", error);
      }
    };
    fetchCustomerList();
    setCustomers(customers);
  }, [customers]);
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
