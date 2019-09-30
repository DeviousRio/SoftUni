function solve() {
  let inputElement = document.getElementById('str').value;
  let buttonElement = document.querySelector('#exercise > form > input[type="button"]');
  buttonElement.addEventListener('click', findEquivalent());

  function findEquivalent() {
    let splitedInput = inputElement.split(' ').filter(a => a !== '');
    let divResult = document.getElementById('result');
    let output = '';

    for (let element of splitedInput) {
      if (Number(element)) {
        output += (String.fromCharCode(element));
      } else {
        let charToNum = [];
        for (let i = 0; i < element.length; i++) {
          charToNum.push(element[i].charCodeAt(0));
        }

        let p = document.createElement('p');
        p.textContent = charToNum.join(' ');
        divResult.appendChild(p);
      }
    }

    let p = document.createElement('p');
    p.textContent = output;
    divResult.appendChild(p);
  }
}