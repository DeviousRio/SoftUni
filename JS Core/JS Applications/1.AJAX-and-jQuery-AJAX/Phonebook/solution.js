function attachEvents() {
    const baseUrl = 'https://phonebook-nakov.firebaseio.com/phonebook';

    $('#btnLoad').on('click', loadContacts);
    $('#btnCreate').on('click', createContact);

    function loadContacts() {
        $('#phonebook').empty();
        $.get(baseUrl + '.json').then(displayContacts).catch(displayError);
    }

    function displayContacts(contacts) {
        for (let key in contacts) {
            let person = contacts[key]['person'];
            let phone = contacts[key]['phone'];
            let li = $('<li>');

            li.text(person + ': ' + phone + ' ');
            $('#phonebook').append(li);
            li.append($('<button>Delete</button>').click(deleteContact.bind(this, key)));
        }
    }

    function displayError(err) {
        $('#phonebook').append($('<li>Error</li>'));
    }

    function createContact() {
        let newContactJSON = JSON.stringify({
            person: $('#person').val(),
            phone: $('#phone').val()
        });

        $.post(baseUrl + '.json', newContactJSON).then(loadContacts).catch(displayError);
        $('#person').val('');
        $('#phone').val('');
    }

    function deleteContact(key) {
        let request = {
            method: 'DELETE',
            url: baseUrl + '/' + key + '.json'
        };

        $.ajax(request)
            .then(loadContacts)
            .catch(displayError);
    }
}