function makeReservation() {
    let fullNameInput = $('#fullName');
    let emailInput = $('#email');
    let phoneNumberInput = $('#phoneNumber');
    let addressInput = $('#address');
    let postalCodeInput = $('#postalCode');

    let currentName = '';
    let currentEmail = '';
    let currentPhoneNumber = '';
    let currentAddress = '';
    let currentPostalCode = '';

    let divContainer = $('#container');
    let infoField = $('#infoPreview');
    let submitBtn = $('#submit').on('click', addInformation);
    let editBtn = $('#edit').on('click', editInformation);
    let continueBtn = $('#continue').on('click', showPaymentMethods);

    function addInformation() {
        if (fullNameInput.val() && emailInput.val()) {
            infoField.append(`<li>Name: ${fullNameInput.val()}</li>`);
            infoField.append(`<li>E-mail: ${emailInput.val()}</li>`);
            infoField.append(`<li>Phone: ${phoneNumberInput.val()}</li>`);
            infoField.append(`<li>Address: ${addressInput.val()}</li>`);
            infoField.append(`<li>Postal Code: ${postalCodeInput.val()}</li>`);

            currentName = fullNameInput.val();
            currentEmail = emailInput.val();
            currentPhoneNumber = phoneNumberInput.val();
            currentAddress = addressInput.val();
            currentPostalCode = postalCodeInput.val();

            resetInputFields();
        }
    }

    function editInformation() {
        fullNameInput.val(currentName);
        emailInput.val(currentEmail);
        phoneNumberInput.val(currentPhoneNumber);
        addressInput.val(currentAddress);
        postalCodeInput.val(currentPostalCode);

        editBtn.attr('disabled', true);
        continueBtn.attr('disabled', true);
        submitBtn.attr('disabled', false);

        infoField.empty();
    }

    function showPaymentMethods() {
        editBtn.attr('disabled', true);
        continueBtn.attr('disabled', true);
        submitBtn.attr('disabled', true);

        divContainer.append('<h2>Payment details</h2>');
        divContainer.append(`<select id="paymentOptions" class="custom-select">
        <option selected disabled hidden>Choose</option>
        <option value="creditCard">Credit Card</option>
        <option value="bankTransfer">Bank Transfer</option>
        </select>`);
        divContainer.append('<div id="extraDetails"></div>');

        $('#paymentOptions').on('change', function () {
            if ($(this).val() == 'creditCard') {
                $('#extraDetails').empty();
                $('#extraDetails').append(`<div class="inputLabel">Card Number<input></div><br>`);
                $('#extraDetails').append(`<div class="inputLabel">Expiration Date<input></div><br>`);
                $('#extraDetails').append(`<div class="inputLabel">Security Numbers<input></div><br>`);
                $('#extraDetails').append(`<button id="checkOut">Check Out</button>`);
                $('#checkOut').on('click', finishReservation);
            }
            if ($(this).val() == 'bankTransfer') {
                $('#extraDetails').empty();
                $('#extraDetails').append(`<p>You have 48 hours to transfer the amount to:<br>IBAN: GR96 0810 0010 0000 0123 4567 890</p>`);
                $('#extraDetails').append(`<button id="checkOut">Check Out</button>`);
                $('#checkOut').on('click', finishReservation);
            }
        });
    }

    function finishReservation() {
        let wrapper = $('#wrapper');
        wrapper.empty();
        wrapper.append('<h4>Thank you for your reservation!</h4>');
    }

    function resetInputFields() {
        fullNameInput.val('');
        emailInput.val('');
        phoneNumberInput.val('');
        addressInput.val('');
        postalCodeInput.val('');
        submitBtn.attr('disabled', true);
        editBtn.attr('disabled', false);
        continueBtn.attr('disabled', false);
    }
}