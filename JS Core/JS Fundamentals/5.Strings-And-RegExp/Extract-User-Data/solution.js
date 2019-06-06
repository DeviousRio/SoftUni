function solve() {
  let inputArr = JSON.parse(document.getElementById('arr').value);
  let buttonElement = document.querySelector('#exercise > form > input[type="button"]');
  buttonElement.addEventListener('click', extractData());

  function extractData() {
    let match;
    let result = document.getElementById('result');
    let pattern = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359 [0-9] [0-9]{3} [0-9]{3}|\+359-[0-9]-[0-9]{3}-[0-9]{3}) ([a-z0-9]+@[a-z]+\.[a-z]{2,3})$/;

    for (let data of inputArr) {
      match = pattern.exec(data);
      if (match) {
        let firstParagraph = document.createElement('p');
        firstParagraph.textContent = `Name: ${match[1]}`;
        result.appendChild(firstParagraph);

        let secondParagraph = document.createElement('p');
        secondParagraph.textContent = `Phone Number: ${match[2]}`;
        result.appendChild(secondParagraph);

        let thirdParagraph = document.createElement('p');
        thirdParagraph.textContent = `Email: ${match[3]}`;
        result.appendChild(thirdParagraph);
      } else {
        let errorParagraph = document.createElement('p');
        errorParagraph.textContent = 'Invalid data';
        result.appendChild(errorParagraph);
      }

      let dashes = document.createElement('p');
      dashes.textContent = '- - -';
      result.appendChild(dashes);
    }
  }
}