import axios from "axios";
import { apiClient } from "./config";
import { CustomerListResponse } from "../dtos/customer.dto";

export const getCustomerList = async (): Promise<CustomerListResponse> => {
  try {
    const res = await apiClient.get<CustomerListResponse>(`/customers`);
    return res.data;
  } catch (e: any) {
    if (axios.isAxiosError(e)) {
      console.log(`error: ${e.message}`);
    } else {
      console.log(`unexpected error: ${e}`);
    }
    return {
      message: e.message,
    };
  }
};
