function create(sentences) {
    let contentDivElement = $('#content');
    sentences.forEach(sentence => {

        let divElement = $('<div>');
        divElement.on('click', function () {
            $(this).find('p').css('display', 'block');
        });

        let pElement = $('<p>');
        pElement.text(sentence);
        pElement.css('display', 'none');

        pElement.appendTo(divElement);
        divElement.appendTo(contentDivElement);
    });
}