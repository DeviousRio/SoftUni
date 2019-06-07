$(() => {
    renderCatTemplate();

    async function renderCatTemplate() {
       let catsTemplate = await $.ajax({
           url: './catsTemplate.html'
       });
       let compiledTemplate = Handlebars.compile(catsTemplate);
       let context = {
        cats: window.cats
       };
       $('#allCats').append(compiledTemplate(context));
    }
})

function showInfo(id) {
    $(`#${id}`).toggle();
}
