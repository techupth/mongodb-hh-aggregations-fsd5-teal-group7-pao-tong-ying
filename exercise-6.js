// Paste the complete MQL here
db.pizzaOrders.aggregate([
    {
    $group: {
    _id: {
    month: { $month: "$created_at" },
    year: { $year: "$created_at" },
    },
    total_price_by_month: { $sum: "$total_price" },
    },
    },{$match: { "_id.month":7, "_id.year": 2021}}
    ])