import { OrderListCustomer } from "../models/Customer";
import { Order } from "../models/Order";

export interface OrderListResponse {
  message: string;
  customer?: OrderListCustomer;
  orders?: Order[];
  total?: number;
}
