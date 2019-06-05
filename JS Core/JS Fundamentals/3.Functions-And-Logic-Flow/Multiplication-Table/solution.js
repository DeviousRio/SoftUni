function solve() {
  let firstNumber = Number(document.getElementById('num1').value);
  let secondNumber = Number(document.getElementById('num2').value);

  let divResult = document.getElementById('result');

  if (firstNumber > secondNumber) {
    document.getElementById('result').innerHTML = 'Try with other numbers.';
  } else {
    for (let i = firstNumber; i <= secondNumber; i++) {
      let p = document.createElement('p');
      p.innerHTML = `${i} * ${secondNumber} = ${i * secondNumber}`;
      divResult.appendChild(p);
    }
  }
}