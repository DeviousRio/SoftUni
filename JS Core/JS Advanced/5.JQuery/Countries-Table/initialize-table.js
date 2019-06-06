function initializeTable() {
    $('#createLink').on('click', addCountry);
    fixLinks();

    function addCountry() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        if (country !== '' && capital !== '') {
            createCountry(country, capital);
        }
    }

    function createCountry(country, capital) {
        let table = $('#countriesTable');
        let row = $('<tr>');
        let countryAndCapital = $(`<td>${country}</td><td>${capital}</td>`);
        let actions = $('<td>')
            .append($('<a href="#">[Up]</a>').on('click', moveUp))
            .append($('<a href="#">[Down]</a>').on('click', moveDown))
            .append($('<a href="#">[Delete]</a>').on('click', deleteRow));

        row.append(countryAndCapital);
        row.append(actions);
        table.append(row);
        fixLinks();
    }

    function moveUp() {
        let currentRow = $(this).parent().parent();
        currentRow.insertBefore(currentRow.prev());
        fixLinks();
    }

    function moveDown() {
        let currentRow = $(this).parent().parent();
        currentRow.insertAfter(currentRow.next());
        fixLinks();
    }

    function deleteRow() {
        let currentRow = $(this).parent().parent();
        currentRow.remove();
        fixLinks();
    }

    function fixLinks() {
        $('#countriesTable a').css('display', 'inline');
        $('#countriesTable > tbody > tr:nth-child(3) > td:nth-child(3) > a:nth-child(1)').css('display', 'none');
        $('#countriesTable > tbody > tr:last-child > td:nth-child(3) > a:nth-child(2)').css('display', 'none');
    }

    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');
}