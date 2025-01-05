```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  {$match: { /* some filter */ } },
  {$group: {_id: "$field", total: {$sum: $value}}}, //Corrected: uses $value
  {$sort: {total: -1}},
  {$limit: 10}
])
```