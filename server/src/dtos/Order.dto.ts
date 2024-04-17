// data transfer model for complete order request

export interface CompleteOrderDto {
  customerId: string;
  customerName: string;
  orderId: string;
  totalInCents: number;
  date: string;
}
