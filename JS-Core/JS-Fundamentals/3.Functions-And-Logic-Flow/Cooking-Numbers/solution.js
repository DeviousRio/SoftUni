function solve() {
    let inputElement = document.querySelector('#exercise input[type="number"]');
    let outputElement = document.getElementById('output');

    let chopButtonElement = document.querySelector('#operations button:nth-child(1)');
    chopButtonElement.addEventListener('click', chopOperation);

    let diceButtonElement = document.querySelector('#operations button:nth-child(2)');
    diceButtonElement.addEventListener('click', diceOperation);

    let spiceButtonElement = document.querySelector('#operations button:nth-child(3)');
    spiceButtonElement.addEventListener('click', spiceOperation);

    let bakeButtonElement = document.querySelector('#operations button:nth-child(4)');
    bakeButtonElement.addEventListener('click', bakeOperation);

    let filletButtonElement = document.querySelector('#operations button:nth-child(5)');
    filletButtonElement.addEventListener('click', filletOperation);

    function chopOperation() {
        if (inputElement.value === '') {
            outputElement.textContent = 0 / 2;
            inputElement.value = outputElement.textContent;
        } else {
            outputElement.textContent = inputElement.value / 2;
            inputElement.value = outputElement.textContent;
        }
    }

    function diceOperation() {
        outputElement.textContent = Math.sqrt(inputElement.value);
        inputElement.value = outputElement.textContent;
    }

    function spiceOperation() {
        outputElement.textContent = Number(inputElement.value) + 1;
        inputElement.value = outputElement.textContent;
    }

    function bakeOperation() {
        outputElement.textContent = inputElement.value * 3;
        inputElement.value = outputElement.textContent;
    }

    function filletOperation() {
        outputElement.textContent = inputElement.value * 0.8;
        inputElement.value = outputElement.textContent;
    }
}