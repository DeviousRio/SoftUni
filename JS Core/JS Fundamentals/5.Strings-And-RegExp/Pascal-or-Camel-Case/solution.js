function solve() {
  let textToModify = document.getElementById("str1").value;
  let currentCase = document.getElementById("str2").value;

  let buttonElement = document.querySelector('#exercise > form > input[type="button"]');
  buttonElement.addEventListener('click', Modify());

  function Modify() {
    let splitedText = textToModify.toLowerCase().split(" ").filter(a => a !== "");
    let output = "";

    if (currentCase === "Pascal Case") {
      for (let word of splitedText) {
        if (word[0] !== word[0].toUpperCase()) {
          word = word.replace(word[0], word[0].toUpperCase());
        }
        output += word;
      }
    } else if (currentCase === "Camel Case") {
      for (let word of splitedText) {
        if (word[0] !== word[0].toUpperCase()) {
          word = word.replace(word[0], word[0].toUpperCase());
        }
        output += word;
      }
      output = output.replace(output[0], output[0].toLowerCase());
    } else {
      output = "Error!"
    }

    let divResult = document.getElementById("result");
    divResult.textContent = output;
  }
}