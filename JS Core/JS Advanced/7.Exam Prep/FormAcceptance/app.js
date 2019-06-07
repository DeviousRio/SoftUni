function acceptance() {
	let shippingCompanyInput = $('#fields > td:nth-child(1) > input[type="text"]');
	let productNameInput = $('#fields > td:nth-child(2) > input[type="text"]');
	let productQuantityInput = $('#fields > td:nth-child(3) > input[type="text"]');
	let productScrapeInput = $('#fields > td:nth-child(4) > input[type="text"]');
	let warehouse = $('#warehouse');

	let divElement = $('<div>');
	let pElement = $('<p>');
	let buttonElement = $('<button type="button">Out of stock</button>');
	buttonElement.on('click', removeProduct);

	if (shippingCompanyInput.val() !== '' && productNameInput.val() !== '' && +productQuantityInput.val() && +productScrapeInput.val()) {

		let totalQuantity = +productQuantityInput.val() - +productScrapeInput.val();

		if (totalQuantity > 0) {
			pElement.append(`[${shippingCompanyInput.val()}] ${productNameInput.val()} - ${totalQuantity} pieces`);
			divElement.append(pElement);
			divElement.append(buttonElement);
			warehouse.append(divElement);
		}
	}

	shippingCompanyInput.val('');
	productNameInput.val('');
	productQuantityInput.val('');
	productScrapeInput.val('');

	function removeProduct() {
		divElement.remove();
	}
}