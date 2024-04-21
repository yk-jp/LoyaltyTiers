import { useEffect, useState } from "react";

import "./HomePage.css";

import Spinner from "../../Components/Spinner/Spinner";
import { Customer } from "../../models/Customer";
import CustomerListTable from "../../Components/Customers/CustomerListTable";
import { getCustomerList } from "../../Apis/customer";

export default function HomePage() {
  let [isLoading, setIsLoading] = useState<boolean>(true);
  let [customers, setCustomers] = useState<Customer[]>([]);

  useEffect(() => {
    const fetchCustomerList = async () => {
      try {
        const data = await getCustomerList();
        if (!data.customers) {
          return;
        }
        setCustomers(data.customers);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching customer list:", error);
      }
    };
    fetchCustomerList();
    setCustomers(customers);
  }, [customers]);
  return (
    <div className="justify-content-center align-items-center vh-100">
      {isLoading ? (
        <div className="vh-80 justify-content-center align-items-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <h2 className="text-align-center">Customer List</h2>
          <div className="max-vh-80 max-w-100">
            <CustomerListTable customers={customers} />
          </div>
        </div>
      )}
    </div>
  );
}
