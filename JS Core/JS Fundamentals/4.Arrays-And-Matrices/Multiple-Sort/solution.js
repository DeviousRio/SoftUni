function solve() {
  let arrInput = JSON.parse(document.getElementById('arr').value);
  let btnElement = document.querySelector('#exercise > form > input[type="button"]');
  btnElement.addEventListener('click', Calculate());

  function Calculate() {
    let ascendingSort = [];
    let alphabeticallySort = [];

    let divResult = document.getElementById('result');
    let firstDiv = document.createElement('div');
    let secondDiv = document.createElement('div');

    ascendingSort = arrInput.sort((a, b) => a - b);
    firstDiv.textContent = ascendingSort.join(', ');
    divResult.appendChild(firstDiv);

    alphabeticallySort = arrInput.sort((a, b) => a.localeCompare(b));
    secondDiv.textContent = alphabeticallySort.join(', ');
    divResult.appendChild(secondDiv);
  }
}