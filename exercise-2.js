// Paste the complete MQL here
import { connect, getCollection, close } from "./db.js";

async function aggregateHH() {
    const collection = getCollection("pizzaOrders");
    const result = await collection
      .aggregate([
        {
          $group: {
            _id: "$size",
            total_amount: { $sum: "$total_price" },
            total_quantity: { $sum: "$quantity" }
          },
        },{ $sort: { total_amount: -1 } }
      ]).toArray()
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