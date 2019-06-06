function solve() {
  let inputElement = document.getElementById('str');
  let btnElement = document.querySelector('#exercise > form > input[type="button"]');
  btnElement.addEventListener('click', solve());

  function solve() {
    let sum = findSum(inputElement.value);
    let endRange = inputElement.value.length - sum;
    let slicedValue = inputElement.value.slice(sum, endRange);
    let result = [];

    for (let i = 0; i < slicedValue.length; i += 8) {
      let end = i + 8;
      let currentEightElements = slicedValue.slice(i, end);
      let decimalValue = parseInt(currentEightElements, 2);
      let resultChar = String.fromCharCode(decimalValue);
      let pattern = /[A-Za-z\s]/;

      if (pattern.test(resultChar)) {
        result.push(resultChar);
      }
    }

    let outputElement = document.getElementById('result');
    outputElement.textContent = result.join('');
    inputElement.value = '';
  }

  function findSum(inputValue) {
    let result = inputValue;
    while (result.length > 1) {
      let temp = result.split('').map(Number).filter((x) => x > 0).reduce((a, b) => a + b).toString();
      result = temp;
    }
    return result;
  }
}