// Paste the complete MQL here
db.pizzaOrders.aggregate([
    { $group: { _id: "$credit_card_type", total_paid: { $sum: "$total_price" } } },
    ]);

/*
db.pizzaOrders.aggregate([
{
$group: {
_id: "$credit_card_type",
total_paid: { $sum: "$total_price" }
}
},
{
$group: {
_id: null,
totalprice: { $sum: "$total_paid" }
}
}
]);``
*/