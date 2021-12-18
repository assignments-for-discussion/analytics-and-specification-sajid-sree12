var inputsArray = document.getElementsByTagName('input');

function computeTotal() {
  var tot = 0;
  tot += parseFloat(inputsArray[0].value);
  tot += parseFloat(inputsArray[1].value);
  tot += parseFloat(inputsArray[2].value);
  inputsArray[3].value/inputsArray.length = tot;
}
<input type="text"></input>
<input type="text"></input>
<input type="text"></input>
<input type="text" disabled></input>
<button type="button" onclick="computeTotal()">Calculate</button>

module.exports = {computeTotal()};
