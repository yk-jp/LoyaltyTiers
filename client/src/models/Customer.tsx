export interface Customer {
  id: number;
  name: string;
  tier: string;
  totalexpense: number;
}

export interface CustomerInfo {
  currentTier: string;
  startOfTierCalculation: Date;
  totalExpenseTier: number;
  expenseToNextTier: number;
  downgradeTo: string;
  downgradeAt: Date;
  expenseToStayCurrentTier: number;
}

export interface OrderListCustomer {
  id: number;
  name: string;
}
