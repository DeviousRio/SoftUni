function toggle() {
    let showMoreButton = $('#extra');
    let onClickSpan = $('#accordion > div.head > span');
    console.log(onClickSpan);
    

    if (showMoreButton.css('display') == 'none') {
        showMoreButton.css('display', 'block');
        onClickSpan.text('Less');
    } else {
        showMoreButton.css('display', 'none');
        onClickSpan.text('More');
    }
}