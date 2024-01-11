import { connect, getCollection, close } from "./db.js";

async function aggregateHH() {
  const collection = getCollection("pizzaOrders");
  const result = await collection
    .aggregate([
      {
        $group: {
          _id: { year: { $year: "$created_at" },month:{ $month: "$created_at" } },
          total_sales: { $sum: "$total_price" },
        },
      },{ $sort: { _id: -1 } }
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
