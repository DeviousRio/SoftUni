function solve() {
  let inputElement = document.getElementById('input').textContent;
  let arr = [];
  let count = 0;
  let index = 0;

  for (let i = 0; i < inputElement.length; i++) {
    if (inputElement[i] === '.') {
      count++;
    }

    if (count === 3) {
      arr.push(inputElement.slice(index, i + 1));
      index = i + 1;
      count = 0;
    }
  }

  let lastParagraph = inputElement.slice(index, inputElement.length);
  arr.push(lastParagraph);

  for (let p of arr) {
    let outputElement = document.getElementById('output');
    let pElement = document.createElement('p');
    pElement.textContent = p;
    outputElement.appendChild(pElement);
  }
}