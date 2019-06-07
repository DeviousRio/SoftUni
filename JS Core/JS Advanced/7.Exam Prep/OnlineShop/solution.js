function onlineShop(selector) {
    let form = `<div id="header">Online Shop Inventory</div>
    <div class="block">
        <label class="field">Product details:</label>
        <br>
        <input placeholder="Enter product" class="custom-select">
        <input class="input1" id="price" type="number" min="1" max="999999" value="1"><label class="text">BGN</label>
        <input class="input1" id="quantity" type="number" min="1" value="1"><label class="text">Qty.</label>
        <button id="submit" class="button" disabled>Submit</button>
        <br><br>
        <label class="field">Inventory:</label>
        <br>
        <ul class="display">
        </ul>
        <br>
        <label class="field">Capacity:</label><input id="capacity" readonly>
        <label class="field">(maximum capacity is 150 items.)</label>
        <br>
        <label class="field">Price:</label><input id="sum" readonly>
        <label class="field">BGN</label>
    </div>`;
    $(selector).html(form);

    let productInput = $('body > div > div.block > input.custom-select');
    let priceInput = $('#price');
    let quantityInput = $('#quantity');
    let submitBtn = $('#submit');
    let ul = $('body > div > div.block > ul');
    let capacityField = $('#capacity');
    let totalSumField = $('#sum');

    let li = $('<li>');
    let currentCapacity = 0;
    let currentQuantity = 0;
    let totalCapacity = 0;
    let sum = 0;

    productInput.on('input', () => {
        let isEmpty = productInput.val() === '';
        submitBtn.attr('disabled', isEmpty);
    });

    submitBtn.on('click', addProduct);

    function addProduct() {
        currentCapacity = +capacityField.val();
        currentQuantity = +quantityInput.val();
        totalCapacity = currentCapacity + currentQuantity;
        sum += +priceInput.val();

        if (totalCapacity < 150) {
            totalSumField.val(sum);
            capacityField.val(totalCapacity);
        } else {
            capacityField.addClass('fullCapacity');
            capacityField.val('full');
            productInput.attr('disabled', true);
            priceInput.attr('disabled', true);
            quantityInput.attr('disabled', true);
            submitBtn.attr('disabled', true);
        }

        addProductToInventory();

        productInput.val('');
        priceInput.val(1);
        quantityInput.val(1);
        submitBtn.attr('disabled', true);
    }

    function addProductToInventory() {
        li = $(`<li>Product: ${productInput.val()} Price: ${priceInput.val()} Quantity: ${quantityInput.val()}</li>`);
        ul.append(li);
    }
}