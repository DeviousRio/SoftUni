function solution() {
	let toyType = $('#toyType');
	let toyPrice = $('#toyPrice');
	let toyDescription = $('#toyDescription');
	let giftShop = $('#christmasGiftShop');

	if (toyType.val() !== '' && +toyPrice.val() && toyDescription.val()) {
		giftShop.css('display', 'block');

		let divElement = $('<div>');
		divElement.addClass('gift');

		let image = $('<img src="gift.png">');

		let h2element = $('<h2>')
		h2element.text(toyType.val());

		let pElement = $('<p>');
		pElement.text(toyDescription.val());

		let btnElement = $('<button>');
		btnElement.text(`Buy it for $${toyPrice.val()}`);
		btnElement.on('click', removeToys);

		image.appendTo(divElement);
		h2element.appendTo(divElement);
		pElement.appendTo(divElement);
		btnElement.appendTo(divElement);
		divElement.appendTo(giftShop);
	}

	toyType.val('');
	toyPrice.val('');
	toyDescription.val('');


	function removeToys() {
		divElement.remove();
	}
}