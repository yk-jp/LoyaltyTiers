import { Customer, CustomerInfo, OrderListCustomer } from "./customer";
import { Order } from "./order";

export interface CustomerListResponse {
  message: string;
  customers?: Customer[];
}

export interface CustomerInfoResponse {
  message: string;
  customerInfo?: CustomerInfo;
}

export interface SaveOrderResponse {
  message: string;
}

export interface OrderListResponse {
  message: string;
  customer?: OrderListCustomer;
  orders?: Order[];
  total?: number;
}
