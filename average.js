var i=0;
function average(numbers) {
   for (i=0;i<=numbers.legeth;i++)
      if (isNaN(numbers[i])) numbers[i]= 0;
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
