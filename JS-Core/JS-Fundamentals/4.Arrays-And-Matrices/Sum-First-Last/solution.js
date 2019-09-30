function solve() {
  let inputElement = document.getElementById('arr').value;
  let arrInput = JSON.parse(inputElement);

  let btnElement = document.querySelector('#exercise > form > input[type="button"]');
  btnElement.addEventListener('click', Calculate());

  function Calculate() {
    let result = document.getElementById('result');

    for (let i = 0; i < arrInput.length; i++) {
      let loopResult = arrInput[i] * arrInput.length;
      let p = document.createElement('p');
      p.textContent = `${i} -> ${loopResult}`;
      result.appendChild(p)
    }
  }
}