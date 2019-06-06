function solve() {
  let inputArr = JSON.parse(document.getElementById('arr').value);
  let wordInput = document.getElementById('str').value;
  let buttonElement = document.querySelector('#exercise > form > input[type="button"]');
  buttonElement.addEventListener('click', replaceWord());

  function replaceWord() {
      let result = document.getElementById('result');
      let wordToReplace = inputArr[0].split(' ').filter(a => a !== '')[2];
      let regex = new RegExp(wordToReplace, 'gi');

      for (let element of inputArr) {
        element = element.replace(regex, wordInput);
        let p = document.createElement('p');
        p.textContent = element;
        result.appendChild(p);
      }
  }
}