function solve() {
  let numInput = parseInt(document.getElementById('num').value);

  let arrInput = JSON.parse(document.getElementById('arr').value);

  let btnElement = document.querySelector('#exercise > form > input[type="button"]');
  btnElement.addEventListener('click', Find());

  function Find() {
    let arr = [];

    for (let element of arrInput) {
      let result = element.includes(numInput);
      let index = element.indexOf(numInput);
      arr.push(result + ' -> ' + index);
    }

    let divResult = document.getElementById('result');
    divResult.textContent = arr;
  }
}