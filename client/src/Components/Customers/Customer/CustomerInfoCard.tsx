import React from "react";
import "./CustomerInfoCard.css";

import { CustomerInfo } from "../../../models/Customer";

type CustomerInfoCardProps = {
  customerInfo: CustomerInfo;
};

export default function CustomerInfoCard({
  customerInfo,
}: CustomerInfoCardProps) {
  return (
    <div className="customerInfoCard">
      <h2 className="card-title">Customer Info</h2>
      <div className="justify-content-between">
        <p>Current Tier:</p>
        <p>{customerInfo.currentTier}</p>
      </div>
      <div className="justify-content-between">
        <p>Date Tier was Calculated At:</p>
        <p>{String(customerInfo.startOfTierCalculation)}</p>
      </div>
      <div className="justify-content-between">
        <p>Expense</p>
        <p>{customerInfo.totalExpenseTier}</p>
      </div>
      <div className="justify-content-between">
        <p>Expense To Next Tier</p>
        <p>{customerInfo.expenseToNextTier}</p>
      </div>
      <div className="justify-content-between">
        <p>Downgrade To</p>
        <p>
          {customerInfo.downgradeTo ? customerInfo.downgradeTo : "Not Applied"}
        </p>
      </div>
      <div className="justify-content-between">
        <p>Downgrade At</p>
        <p>
          {!customerInfo.downgradeAt // String(null) = "null"
            ? "Not Applied"
            : String(customerInfo.downgradeAt)}
        </p>
      </div>
      <div className="justify-content-between">
        <p> Expense To Stay At Current Tier</p>
        <p>{customerInfo.expenseToStayCurrentTier}</p>
      </div>
    </div>
  );
}
