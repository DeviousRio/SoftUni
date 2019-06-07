function subtract() {
    let firstNumberElement = $('#firstNumber').val();
    let secondNumberElement = $('#secondNumber').val();
    let resultElement = $('#result');

    let totalSum = +firstNumberElement - +secondNumberElement;
    resultElement.append(totalSum);
}