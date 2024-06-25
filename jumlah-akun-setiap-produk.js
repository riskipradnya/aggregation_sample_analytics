db.accounts.aggregate([{$unwind: "$products"}, {$group: {_id: "$products", count: {$sum: 1}}}, {$sort: {count: -1}}])
