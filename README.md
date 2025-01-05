# MongoDB Aggregation Error: Incorrect Field Reference in $sum

This repository demonstrates a common error in MongoDB aggregation pipelines: incorrectly referencing fields within aggregation operators. Specifically, the example shows an error where a string is used instead of a field expression within the `$sum` operator, leading to unexpected aggregation results.

## Bug Description
The initial aggregation pipeline attempts to sum a field called `value`.  However, it incorrectly uses the string "$value" instead of the field expression `$value`, causing the aggregation to fail or produce incorrect results.

## Solution
The corrected aggregation pipeline correctly uses the field expression `$value` within the `$sum` operator to sum the values correctly. This ensures the aggregation pipeline executes as intended and produces the expected results.

## How to Reproduce
1.  Clone this repository.
2.  Create a MongoDB collection with sample data.
3.  Run the original aggregation pipeline (bug.js).
4.  Observe the incorrect result.
5.  Run the corrected aggregation pipeline (bugSolution.js).
6.  Observe the correct result.