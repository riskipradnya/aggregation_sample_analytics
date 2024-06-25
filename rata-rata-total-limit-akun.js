db.accounts.aggregate([{$group: {_id: null, averageLimit: {$avg: "$limit"}, totalLimit: {$sum: "$limit"}}}])
