function solve() {
  let inputString = document.getElementById('str').value;
  let inputNumber = Number(document.getElementById('num').value);
  let buttonElement = document.querySelector('#exercise > form > input[type="button"]');
  buttonElement.addEventListener('click', Calculate());

  function Calculate() {
    let arr = [];
    let counter = 0;

    if (inputString.length % inputNumber !== 0) {
      let length = inputString.length;
      let symbolCount = 0;

      while (length % inputNumber !== 0) {
        length %= inputNumber;
        length++;
        symbolCount++;
      }

      for (let i = 0; i < symbolCount; i++) {
        inputString += inputString[counter];
        counter++;
      }
    }

    for (let i = 0; i < inputString.length; i += inputNumber) {
      arr.push(inputString.substr(i, inputNumber));
    }

    let divResult = document.getElementById('result');
    divResult.textContent = arr.join(' ');
  }
}