function realEstateAgency() {
	let rentPriceInput = $('#regOffer > input[type="text"]:nth-child(2)');
	let apartmentTypeInput = $('#regOffer > input[type="text"]:nth-child(3)');
	let commissionRateInput = $('#regOffer > input[type="text"]:nth-child(4)');

	let familyBudgetInput = $('#findOffer > input[type="text"]:nth-child(2)');
	let searchApartmentTypeInput = $('#findOffer > input[type="text"]:nth-child(3)');
	let familyNameInput = $('#findOffer > input[type="text"]:nth-child(4)');

	let regOfferButton = $('#regOffer > button').on('click', regOffer);
	let findOfferButton = $('#findOffer > button').on('click', findOffer);

	let message = $('#message');
	let building = $('#building');
	let agencyProfit = $('#roof > h1');

	function regOffer() {
		let divElement = $('<div class="apartment"></div>');
		let rentPElement = $('<p>');
		let typePElement = $('<p>');
		let commissionPElement = $('<p>');

		if (+rentPriceInput.val() && +commissionRateInput.val() && +rentPriceInput.val() > 0 &&
			(+commissionRateInput.val() >= 0 && +commissionRateInput.val() <= 100) &&
			apartmentTypeInput.val() !== '' && apartmentTypeInput.val().indexOf(':') === -1) {
			rentPElement.append(`Rent: ${rentPriceInput.val()}`);
			typePElement.append(`Type: ${apartmentTypeInput.val()}`);
			commissionPElement.append(`Commission: ${commissionRateInput.val()}`);

			divElement.append(rentPElement);
			divElement.append(typePElement);
			divElement.append(commissionPElement);
			building.append(divElement);

			message.text('Your offer was created successfully.');
		} else {
			message.text('Your offer registration went wrong, try again.');
		}

		rentPriceInput.val('');
		apartmentTypeInput.val('');
		commissionRateInput.val('');
	}

	function findOffer() {
		if (+familyBudgetInput.val() > 0 && searchApartmentTypeInput.val() !== '' && familyBudgetInput.val() !== '') {
			let isTrue = true;

			for (let apartment of Array.from($('.apartment'))) {
				let type = $(apartment).children().eq(1);
				let splitType = type.text().split(': ')[1];

				if (searchApartmentTypeInput.val() === splitType) {
					let rent = $(apartment).children().eq(0);
					let splitRent = rent.text().split(': ')[1];

					let commission = $(apartment).children().eq(2);
					let splitCommission = commission.text().split(': ')[1]

					let neededCommissionForAgency = (+splitRent * + splitCommission) / 100;
					let moneyNeeded = (+splitRent) + neededCommissionForAgency;

					let moveOutBtn = $('<button>MOVEOUT</button>').on('click', function () {
						$(apartment).remove();
						message.text(`They had found cockroaches in ${familyNameInput.val()}\'s apartment`);
					});

					if (+familyBudgetInput.val() >= moneyNeeded) {
						rent.text(`${familyNameInput.val()}`);
						type.text('live here now');

						commission.remove();
						$(apartment).append(moveOutBtn);
						$(apartment).css('border', '2px solid red');

						message.text('Enjoy your new home! :))');
						isTrue = false;

						let currentAgencyCommission = +agencyProfit.text().split(' ')[2];
						let newAgencyCommission  = currentAgencyCommission + (neededCommissionForAgency * 2);
						agencyProfit.text(`Agency profit: ${newAgencyCommission} lv.`);
					}

					if (!isTrue) {
						break;
					}
				}
			}

			if (isTrue) {
				message.text('We were unable to find you a home, so sorry :(');
			}
		} else {
			message.text('We were unable to find you a home, so sorry :(');
		}
	}
}