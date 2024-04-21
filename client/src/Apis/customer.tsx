import axios from "axios";
import { apiClient } from "./config";
import {
  CustomerInfoResponse,
  CustomerListResponse,
} from "../dtos/customer.dto";
import { CustomerInfoParams } from "../types/queryParams";

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

export const getCustomerInfo = async (
  params: CustomerInfoParams
): Promise<CustomerInfoResponse> => {
  try {
    const customerId: number = params.customerId;
    const res = await apiClient.get<CustomerInfoResponse>(
      `/customer/${customerId}`
    );
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
