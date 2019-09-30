function attachEvents() {
    // Getting all elements with button class name and attach onclick function
    $('a.button').on('click', selectButton);

    function selectButton() {
        
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
    }
}