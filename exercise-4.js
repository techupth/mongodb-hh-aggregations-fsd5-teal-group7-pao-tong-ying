// Paste the complete MQL here
db.pizzaOrders.aggregate([
    {
    $group: {
    _id: {
    month: "$created_at",
    year: "$created_at",
    },
    total_sales: { $sum: "$total_price" },
    },
    },
    ])