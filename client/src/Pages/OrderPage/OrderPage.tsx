import "./OrderPage.css";

import { useParams } from "react-router-dom";

import Spinner from "../../Components/Spinner/Spinner";
import OrderListTable from "../../Components/Order/OrderListTable";
import { useEffect, useState } from "react";
import { OrderListCustomer } from "../../models/Customer";
import { Order } from "../../models/Order";
import { getOrderList } from "../../Apis/order";
import { OrderListResponse } from "../../dtos/order.dto";

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
        console.log("teett", data);
        if (!data.orders) {
          return;
        }
        setOrderList(data.orders);
        setCustomer(data.customer);
        setOrderTotal(data.total);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching customer list:", error);
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
          <h2 className="text-align-center">
            Customer Id: {customer!.id}, Customer Name: {customer!.name}
          </h2>
          <h2 className="text-align-center">
            Order List: {orderTotal} ordered in total
          </h2>
          <div className="max-vh-80 max-w-100">
            <OrderListTable orders={orderList!} />
          </div>
        </div>
      )}
    </div>
  );
}
