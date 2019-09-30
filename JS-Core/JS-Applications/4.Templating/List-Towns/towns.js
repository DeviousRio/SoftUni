function attachEvents() {
    $('#btnLoadTowns').on('click', getTowns);

    function getTowns() {
        let towns = $('#towns').val().split(', ');
        // Get template
        let template = $('#towns-template').text();
        // Compile template
        let compiledTemplate = Handlebars.compile(template);
        // Create context
        let context = {
            towns: towns
        };
        // Add to HTML
        $('#root').append(compiledTemplate(context));
    }
}