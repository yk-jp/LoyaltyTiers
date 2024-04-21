import express from "express";

import { db } from "../config/config";
import { GetCustomerInfoParams } from "types/queryParams";

export const getCustomerList = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const customersData = await db.query(
      "SELECT c.id, c.name, c.total_expense_tier AS totalexpense, t.name AS tier " +
        "FROM customers c " +
        "JOIN tiers t ON c.tier_id = t.id " +
        "ORDER BY c.id, c.name, c.total_expense_tier DESC"
    );

    const customers = customersData.rows;
    res.status(200).json({
      message: "OK",
      customers,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getCustomerInfo = async (
  req: express.Request<GetCustomerInfoParams, {}, {}, {}>, // type annotatation for request params
  res: express.Response
) => {
  const params: GetCustomerInfoParams = req.params;
  const customerId: number = params.customerId;
  try {
    const customerInfoData = await db.query(
      "SELECT t.name as current_tier, " +
        "(DATE_TRUNC('year', CURRENT_DATE) - INTERVAL '1 year') as start_of_tier_calculation, " +
        "c.total_expense_tier, " +
        "CASE " +
        "WHEN t.next_target_expense - c.total_expense_tier < 0 THEN 0 " +
        "ELSE t.next_target_expense - c.total_expense_tier " +
        "END AS expense_to_next_tier, " +
        "CASE " +
        "WHEN c.total_expense_tier < t.expense THEN t.downgrade_to " +
        "ELSE NULL " +
        "END AS downgrade_to, " +
        "CASE " +
        "WHEN downgrade_to IS NULL THEN NULL " +
        "ELSE DATE_TRUNC('year', CURRENT_DATE) + INTERVAL '1 year' - INTERVAL '1 day' " +
        "END AS downgrade_at, " +
        "CASE " +
        "WHEN c.total_expense_tier < t.expense THEN t.expense - c.total_expense_tier " +
        "ELSE 0 " +
        "END AS expense_to_stay_current_tier " +
        "FROM customers c " +
        "JOIN tiers t ON c.tier_id = t.id " +
        "WHERE c.id = $1 ",
      [customerId]
    );

    const info = customerInfoData.rows[0];

    let customerInfo = {
      currentTier: info.current_tier,
      startOfTierCalculation: info.start_of_tier_calculation,
      totalExpenseTier: info.total_expense_tier,
      expenseToNextTier: info.expense_to_next_tier,
      downgradeTo: info.downgrade_to,
      downgradeAt: info.downgrade_at,
      expenseToStayCurrentTier: info.expense_to_stay_current_tier,
    };

    res.status(200).json({
      message: "OK",
      customerInfo,
    });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
