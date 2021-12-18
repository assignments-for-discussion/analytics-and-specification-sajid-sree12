var start = parseInt(prompt("Enter the Starting Number"));
var end = parseInt(prompt("Enter the Ending Number"));
var total = 0;
var count = (end - start) + 1
var average = 0;
console.log("Average of Numbers between " + start + " and " + end + " is: " );
for (start = start; start <= end; start++)
    total = total + start;
average = total / count;
module.exports = {average};
