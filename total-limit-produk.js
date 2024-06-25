db.accounts.aggregate([{$unwind: "$products"}, {$group: {_id: "$products", totalLimit: {$sum: "$limit"}}}, {$sort: {totalLimit: -1}}])
