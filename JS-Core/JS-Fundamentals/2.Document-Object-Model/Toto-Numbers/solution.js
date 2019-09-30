function solve() {
	let button = document.getElementsByTagName('button')[0];
	let allNumbers = document.getElementById('allNumbers');

	button.addEventListener('click', getNumbers);

	function getNumbers() {
		let number = document.getElementsByTagName('input')[0].value;

		let numbers = number.split(' ');

		let count = 0;

		numbers.forEach(element => {
			count++;
			if (element < 1 || element > 49) {
				return;
			}
		});
		
		if (count !== 6) {
			return;
		}

		for (let i = 1; i <= 49; i++) {
			let num = document.createElement('div');
			num.textContent = i;
			num.setAttribute('class', 'numbers');

			numbers.forEach(element => {

				if (element == num.textContent) {
					num.style.backgroundColor = 'orange';
				}
			});
			allNumbers.appendChild(num);
		}
		document.getElementsByTagName('input')[0].setAttribute('disabled', 'true');
		document.getElementsByTagName('button')[0].setAttribute('disabled', 'true');
	}
}