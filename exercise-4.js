
import { connect, getCollection, close } from "./db.js";

async function aggregateHH() {
  const collection = getCollection("pizzaOrders");
  const result = await collection
    .aggregate([
      {
        $group: {
          _id: { year: { $year: "$created_at" } },
          total_price_per_year: { $sum: "$total_price" },
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
