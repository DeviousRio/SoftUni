function attachEvents() {
	$('#items li').on('click', selectTown);
	$('#showTownsButton').on('click', showTowns);
	let townsArr = [];

	function selectTown() {
		let currentListItem = $(this);
		if (currentListItem.attr('data-selected') === 'true') {
			currentListItem.attr('data-selected', 'false');
			townsArr.splice(townsArr.indexOf(currentListItem.text()), 1);
			currentListItem.css('background', '');
		} else {
			currentListItem.attr('data-selected', 'true');
			townsArr.push(currentListItem.text());
			currentListItem.css('background', '#DDD');
		}
	}

	function showTowns() {
		$('#selectedTowns').text(townsArr.join(' '));
	}
}