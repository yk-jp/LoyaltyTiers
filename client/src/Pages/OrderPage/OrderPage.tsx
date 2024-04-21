import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./OrderPage.css";

import Button from "../../Components/Button/Button";
import OrderListTable from "../../Components/Order/OrderListTable";
import Spinner from "../../Components/Spinner/Spinner";
import { Order } from "../../models/Order";
import { OrderListCustomer } from "../../models/Customer";
import { OrderListResponse } from "../../dtos/order.dto";
import { getOrderList } from "../../Apis/order";

export default function OrderPage() {
  let [isLoading, setIsLoading] = useState<boolean>(true);
  let [orderList, setOrderList] = useState<Order[]>([]);
  let [customer, setCustomer] = useState<OrderListCustomer>();
  let [orderTotal, setOrderTotal] = useState<number>();
  const { customerId } = useParams<{ customerId: string }>();

  useEffect(() => {
    const fetchOrderList = async (customerId: number) => {
      try {
        const data: OrderListResponse = await getOrderList({ customerId });
        if (!data.orders) {
          return;
        }
        setOrderList(data.orders);
        setCustomer(data.customer);
        setOrderTotal(data.total);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching order list:", error);
      }
    };

    fetchOrderList(Number(customerId));
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
              <Link to={`/customer/${customer!.id}`}>
                <Button
                  text={"View Customer Detail"}
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
          <h2 className="text-align-center">
            Customer Id: {customer!.id}, Customer Name: {customer!.name}
          </h2>
          <h2 className="text-align-center">
            Order History: {orderTotal} ordered in total
          </h2>
          <div className="max-vh-80 max-w-100">
            <OrderListTable orders={orderList!} />
          </div>
        </div>
      )}
    </div>
  );
}
