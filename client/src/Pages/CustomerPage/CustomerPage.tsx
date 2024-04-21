import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./CustomerPage.css";

import Button from "../../Components/Button/Button";
import Spinner from "../../Components/Spinner/Spinner";
import CustomerInfoCard from "../../Components/Customers/Customer/CustomerInfoCard";
import { CustomerInfoResponse } from "../../dtos/customer.dto";
import { CustomerInfo } from "../../models/Customer";
import { getCustomerInfo } from "../../Apis/customer";

export default function CustomerPage() {
  let [isLoading, setIsLoading] = useState<boolean>(true);
  let [customerInfo, setCustomerInfo] = useState<CustomerInfo>();
  const { customerId } = useParams<{ customerId: string }>();

  useEffect(() => {
    const fetchCustomerInfo = async (customerId: number) => {
      try {
        const data: CustomerInfoResponse = await getCustomerInfo({
          customerId,
        });
        if (!data.customerInfo) {
          return;
        }
        setCustomerInfo(data.customerInfo);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching customer Info:", error);
      }
    };
    fetchCustomerInfo(Number(customerId));
  }, [customerId]);
  return (
    <div className="justify-content-center align-items-center">
      {isLoading ? (
        <div className="vh-80 justify-content-center align-items-center">
          <Spinner />
        </div>
      ) : (
        <div>
          <div className="justify-content-center">
            <div>
              <Link to={"/"}>
                <Button
                  text={"return to home page"}
                  style={{
                    backgroundColor: "#FF7F50",
                    color: "white",
                    padding: "1em",
                    margin: "1em",
                    border: "none",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </div>
            <div>
              <Link to={`/customer/${Number(customerId)}/orders`}>
                <Button
                  text={"View Order History"}
                  style={{
                    backgroundColor: "#FF7F50",
                    color: "white",
                    padding: "1em",
                    margin: "1em",
                    border: "none",
                    cursor: "pointer",
                  }}
                />
              </Link>
            </div>
          </div>
          <div className="max-vh-80 max-w-100">
            <CustomerInfoCard customerInfo={customerInfo!} />
          </div>
        </div>
      )}
    </div>
  );
}
