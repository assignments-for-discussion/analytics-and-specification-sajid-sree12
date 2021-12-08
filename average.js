
function average(numbers) {
  return numbers.reduce((p, c)=> p + c, 0.01) / numbers.length;
}

module.exports = {average};
