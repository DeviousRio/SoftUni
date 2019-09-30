function solve() {
  let inputTextElement = document.getElementById('arr').value;
  let arrInput = JSON.parse(inputTextElement);

  let btnElement = document.querySelector('#exercise > form > input[type="button"]');
  btnElement.addEventListener('click', Calculate());

  function Calculate() {
    let divResult = document.getElementById('result');
    let loopResult = [];

    for (let i = 0; i < arrInput.length; i++) {
      if (i % 2 === 0) {
        loopResult.push(arrInput[i]);
      }
    }
    divResult.textContent = loopResult.join(' x ');
  }
}