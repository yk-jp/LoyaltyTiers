import { Customer, CustomerInfo } from "../models/Customer";

export interface CustomerListResponse {
  message: string;
  customers?: Customer[];
}

export interface CustomerInfoResponse {
  message: string;
  customerInfo?: CustomerInfo;
}
