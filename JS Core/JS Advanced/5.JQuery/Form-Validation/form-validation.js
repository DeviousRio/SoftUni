function validate() {
	let usernameInput = $('#username');
	let emailInput = $('#email');
	let passInput = $('#password');
	let confirmPassInput = $('#confirm-password');
	let companyInfo = $('#companyInfo');
	let companyNmbr = $('#companyNumber');
	let companyChecked = $('#company').on('click', showCompanyInfo);
	let submitBtn = $('#submit').on('click', validateUserInfo);

	function validateUserInfo(e) {
		e.preventDefault();
		let usernameRegex = /^[A-Za-z0-9]{3,20}$/g;
		let emailRegex = /(.+)?@(.+)?\.(.+)?/g;
		let passRegex = /^\w{5,15}$/;
		let isValid = true;

		if (!usernameRegex.test(usernameInput.val())) {
			usernameInput.css('border-color', 'red');
			isValid = false;
		}

		if (!emailRegex.test(emailInput.val())) {
			emailInput.css('border-color', 'red');
			isValid = false;
		}

		if (!passRegex.test(passInput.val())) {
			passInput.css('border-color', 'red');
			isValid = false;
		} 

		if (!passRegex.test(confirmPassInput.val()) || passInput.val() !== confirmPassInput.val()) {
			passInput.css('border-color', 'red');
			confirmPassInput.css('border-color', 'red');
			isValid = false;
		}

		if (companyInfo.css('display') === 'block') {
			if (companyNmbr.val() < 1000 || companyNmbr.val() > 9999) {
				companyNmbr.css('border-color', 'red');
				isValid = false;
			}
		}

		if (isValid === true) {
			let resultDiv = $('#valid').css('display', 'block');
		}
	}

	function showCompanyInfo() {
		if (companyInfo.css('display') === 'none') {
			companyInfo.css('display', 'block');
		} else {
			companyInfo.css('display', 'none');
		}
	}
}