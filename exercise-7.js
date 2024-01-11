// Paste the complete MQL here
db.pizzaOrders.aggregate([
    { $group : {
        _id :{year: {$year : "$created_at"} ,month:{$month :"$created_at"} },
        total_price_by_month : {$sum :"$total_price" }}
    },{$match :{"_id.year":2021}},{$sort :{"total_price_by_month":1}},{$limit:1}
    
    ])