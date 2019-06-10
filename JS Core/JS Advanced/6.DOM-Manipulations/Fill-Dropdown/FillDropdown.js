function addItem() {
    let textInputElement = $('#newItemText');
    let valueInputElement = $('#newItemValue');

    let menuElement = $('#menu');
    let optionElement = $(`<option value="${valueInputElement.val()}">${textInputElement.val()}</option>`);

    menuElement.append(optionElement);

    textInputElement.val('');
    valueInputElement.val('');
}