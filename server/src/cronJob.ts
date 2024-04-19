import { db } from "./config/config";
import * as schedule from "node-schedule";

// periodic update on the end of the year.
export const periodicUpdate = async () => {
  // update customer data
  try {
    await updateCustomerInfo();
  } catch (e) {
    // Reschedule the task in 3 mins just in case there were transaction errors.
    schedule.scheduleJob(new Date(Date.now() + 3 * 60 * 1000), periodicUpdate);
  }
};

const updateCustomerInfo = async () => {
  try {
    await db.query("BEGIN");

    /**
     * I couldn't find a good answer for bulk updates.
     * As a temporary solution, use temp to achive bulk updates with efficiency.
     */

    // total_cents is the total of expenses since the lst day of last year.
    await db.query(
      "CREATE TEMPORARY TABLE temp_customer_total_expenses AS " +
        "SELECT c.id AS customer_id, " +
        "COALESCE(SUM(o.total_cents), 0) AS total_expenses " +
        "FROM customers c " +
        "LEFT JOIN orders o ON c.id = o.customer_id " +
        "WHERE o.created_at >= DATE_TRUNC('year', CURRENT_DATE - INTERVAL '1 year') " +
        "GROUP BY c.id"
    );

    // Update customers based on data in the temporary table
    await db.query(
      "UPDATE customers c " +
        "SET total_expense_tier = cte.total_expenses, " +
        "tier_id = CASE " +
        "WHEN cte.total_expenses >= 500 THEN (SELECT id FROM tiers WHERE name = 'Gold') " +
        "WHEN cte.total_expenses >= 100 THEN (SELECT id FROM tiers WHERE name = 'Silver') " +
        "ELSE (SELECT id FROM tiers WHERE name = 'Bronze') " +
        "END " +
        "FROM temp_customer_total_expenses cte " +
        "WHERE c.id = cte.customer_id"
    );

    await db.query("DROP TABLE temp_customer_total_expenses");

    await db.query("COMMIT");
    console.log("updateCustomerInfo: Recalculation of customer data finished");
  } catch (e) {
    console.log(
      `updateCustomerInfo: Recalculation of customer data failed: ${e.message}`
    );
    await db.query("ROLLBACK");
    throw e;
  }
};
