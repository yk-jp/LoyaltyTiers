import { Customer } from "../models/Customer";

export interface CustomerListResponse {
  message: string;
  customers?: Customer[];
}
