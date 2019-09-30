function increment(selector) {
    // Creating the needed elements
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    // Textarea formation
    textArea.val(0);
    textArea.addClass('counter');
    textArea.attr('disabled', true);

    // Buttons formation
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');

    // List formation
    list.addClass('results');

    // Events
    $(incrementBtn).on('click', incrementEvent);
    $(addBtn).on('click', addEvent);

    function incrementEvent() {
        textArea.val(+textArea.val() + 1);
    }

    function addEvent() {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    }

    // Add our elements to the DOM
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);
    container.append(fragment);
}