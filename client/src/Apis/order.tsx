import axios from "axios";
import { apiClient } from "./config";
import { OrderListResponse } from "../dtos/order.dto";
import { OrderListParams } from "../types/queryParams";

export const getOrderList = async (
  params: OrderListParams
): Promise<OrderListResponse> => {
  try {
    const customerId: number = params.customerId;
    const res = await apiClient.get<OrderListResponse>(`/order/${customerId}`);
    console.log(res);
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
