import { connect, getCollection, close } from "./db.js";

async function aggregateHH() {
  const collection = getCollection("pizzaOrders");
  const result = await collection
    .aggregate([
      {
        $group: {
          _id: { year: { $year: "$created_at" },month:{ $month: "$created_at" } },
          total_price_by_month: { $sum: "$total_price" },
        },
      },{ $sort: { total_price_by_month: 1 } },{ $match: { "_id.year": 2021} },{$limit:1}
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
