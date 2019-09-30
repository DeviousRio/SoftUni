function solve() {
  let inputArrElement = JSON.parse(document.getElementById('arr').value);
  let result = document.getElementById('result');

  let regex = new RegExp(`(\\s|^)(${inputArrElement[0]}\\s+)([A-Z!#$%]{8,})(\\.|,|\\s|$)`, 'gi');

  for (let i = 1; i < inputArrElement.length; i++) {
    let str = inputArrElement[i];
    let match = regex.exec(str);

    while (match) {
      let encodeMessage = match[3];
      if (encodeMessage.toUpperCase() !== encodeMessage) {
        match = regex.exec(str);
        continue;
      }

      let decodeMessage = decodeMessageFunc(encodeMessage);
      let message = match[1] + match[2] + decodeMessage + match[4];
      str = str.replace(match[0], message);
      match = regex.exec(str);
    }

    let paragraphElement = document.createElement('p');
    paragraphElement.textContent = str;
    result.appendChild(paragraphElement);
  }

  function decodeMessageFunc(encodeMessage) {
    while (encodeMessage.indexOf('!') !== -1) {
      encodeMessage = encodeMessage.replace('!', 1);
    }

    while (encodeMessage.indexOf('%') !== -1) {
      encodeMessage = encodeMessage.replace('%', 2);
    }

    while (encodeMessage.indexOf('#') !== -1) {
      encodeMessage = encodeMessage.replace('#', 3);
    }

    while (encodeMessage.indexOf('$') !== -1) {
      encodeMessage = encodeMessage.replace('$', 4);
    }

    return encodeMessage.toLowerCase();
  }
}