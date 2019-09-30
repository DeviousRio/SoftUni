function solve() {
  let inputText = document.getElementById('arr').value;
  let inputArr = JSON.parse(inputText);

  let btnElement = document.querySelector('#exercise > form > input[type="button"]');
  btnElement.addEventListener('click', Reverse());

  function Reverse() {
    inputArr.forEach((word, index, arr) => {
      arr[index] = word.split('').reverse().join('')
    });

    let resultArr = inputArr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let result = document.getElementById('result');
    result.textContent = resultArr.join(' ');
  }
}