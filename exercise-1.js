// Paste the complete MQL here
import { connect, getCollection, close } from "./db.js";

async function aggregateHH() {
  const collection = getCollection("pizzaOrders");
  const result = await collection
    .aggregate([
      {
        $group: {
          _id: "$credit_card_type",
          total_paid: { $sum: "$total_price" },
        },
      },
    ])
    .toArray();
  console.log(result);
  return "done.";
}

async function main() {
  await connect();
  try {
    await aggregateHH();
  } catch (error) {
    console.error(error);
  } finally {
    close();
  }
}
main();
