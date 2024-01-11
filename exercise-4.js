// Paste the complete MQL here
db.pizzaOrders.aggregate([
    { $group : {_id : {$year : "$created_at"} , totalSalesPerYear : {$sum : "$total_price" }}},
    { $sort : {_id : -1}}
    ])