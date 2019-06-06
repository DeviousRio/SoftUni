function solve() {
  let keywordInputElement = document.getElementById('str').value;
  let textInputElement = document.getElementById('text').value;
  let resultElement = document.getElementById('result');

  let regEx = new RegExp(`${keywordInputElement}(.*?)${keywordInputElement}`, 'g');
  let message = `Message: ${regEx.exec(textInputElement)[1]}`;
  textInputElement = textInputElement.replace(message, '');

  let pattern = /(east|north)[\s\S]*?([\d]{2})[^,]*?,[^,]*?([\d]{6})/gi;
  let direction = '';
  let east = '';
  let north = '';

  while ((direction = pattern.exec(textInputElement)) !== null) {
    if (direction[1].toUpperCase() === 'NORTH') {
      north = `${direction[2]}.${direction[3]} N`;
    } else if (direction[1].toUpperCase() === 'EAST') {
      east = `${direction[2]}.${[direction[3]]} E`;
    }
  }

  let firstParagraphElement = document.createElement('p');
  firstParagraphElement.textContent = north;

  let secondParagraphElement = document.createElement('p');
  secondParagraphElement.textContent = east;

  let thirdParagraphElement = document.createElement('p');
  thirdParagraphElement.textContent = message;

  resultElement.appendChild(firstParagraphElement);
  resultElement.appendChild(secondParagraphElement);
  resultElement.appendChild(thirdParagraphElement);
}