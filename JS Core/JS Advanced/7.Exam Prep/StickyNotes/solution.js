function addSticker() {
    let titleInput = $('body > div.text > div.title-input > input');
    let textInput = $('body > div.text > div.text-input > input');

    let stickerList = $('#sticker-list');
    let liElement = $('<li class="note-content"></li>');
    let aElement = $('<a href="#" class="button">x</a>');
    let h2Element = $('<h2>');
    let hrElement = $('<hr>');
    let pElement = $('<p>');

    aElement.on('click', removeSticker);

    if (titleInput.val() !== '' && textInput.val() !== '') {
        h2Element.text(titleInput.val());
        pElement.text(textInput.val());

        liElement.append(aElement);
        liElement.append(h2Element);
        liElement.append(hrElement);
        liElement.append(pElement);
        stickerList.append(liElement);

        titleInput.val('');
        textInput.val('');
    }

    function removeSticker() {
        liElement.remove();
    }
}