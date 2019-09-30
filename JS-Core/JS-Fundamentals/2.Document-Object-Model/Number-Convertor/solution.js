function solve() {
    let selectMenu = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    let hexadecimalOption = document.createElement('option');

    binaryOption.value = 'binary';
    binaryOption.innerHTML = 'Binary';
    selectMenu.appendChild(binaryOption);

    hexadecimalOption.value = 'hexadecimal';
    hexadecimalOption.innerHTML = 'Hexadecimal';
    selectMenu.appendChild(hexadecimalOption);

    let decimalInput = document.getElementsByTagName('input')[0];
    let convertButton = document.getElementsByTagName('button')[0];
    let result = document.getElementById('result');

    convertButton.addEventListener('click', () => {
        let convertTo = undefined;
        switch (selectMenu.value) {
            case 'binary':
                convertTo = 2;
                break;
            case 'hexadecimal':
                convertTo = 16;
                break;
            default:
                convertTo = undefined;
                break;
        }

        if (convertTo) {
            let numToConvert = Number(decimalInput.value);
            result.value = Math.abs(numToConvert).toString(convertTo).toUpperCase();
            if (numToConvert < 0) result.value = '-' + result.value;
        }
    });
}

