function average(numbers) {
   var i=0;
   for (i=0;i<=numbers.legeth;i++)
      if (isNaN(numbers[i])) numbers[i]= 0;
  return numbers.reduce((p, c)=> p + c, 0) / numbers.length;
}

module.exports = {average};
