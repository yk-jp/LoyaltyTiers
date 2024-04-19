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

    await db.query("");

    await db.query("COMMIT");
  } catch (e) {
    console.log(
      `updateCustomerInfo: Recalculation of customer data failed: ${e.message}`
    );
    await db.query("ROLLBACK");
    throw e;
  }
};
