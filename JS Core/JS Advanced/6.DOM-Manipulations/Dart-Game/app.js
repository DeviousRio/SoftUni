function dart() {
	//adding event on all playBoard div elements
	let playBoard = $('#playBoard').on('click', 'div', onPlayBoardClick);
	let homeTurn = true;
	const maxScore = 100;
	let pointsElement;

	const colorMapping = {
		firstLayer: 0,
		secondLayer: 1,
		thirdLayer: 2,
		fourthLayer: 3,
		fifthLayer: 4,
		sixthLayer: 5
	};

	function onPlayBoardClick(e) {
		e.stopPropagation();
		//get id of the target
		let id = $(e.target).attr('id');
		let points = getScore(id);

		selectPlayer(points);
	}

	function getScore(id) {
		// find the element needed
		let colorRow = +$('#scoreBoard').find('tbody tr').eq(colorMapping[id]).children().eq(1).text().split(' ')[0];
		return colorRow;
	}

	function selectPlayer(score) {
		let selector = '';
		if (homeTurn) {
			pointsElement = $('#Home').children().eq(0);
			selector = $('#Home');
		} else {
			pointsElement = $('#Away').children().eq(0);
			selector = $('#Away');
		}

		//Change the turn after each click
		homeTurn = !homeTurn;

		//Get the text content,cast it to number and sum with the score
		pointsElement.text((index, text) => Number(text) + score);

		//Switch turns
		let isHomeTurn = $('#turns > p:nth-child(1)');
		let isAwayTurn = $('#turns > p:nth-child(2)');
		if (homeTurn) {
			isHomeTurn.text('Turn on Home');
			isAwayTurn.text('Next is Away');
		} else {
			isHomeTurn.text('Turn on Away');
			isAwayTurn.text('Next is Home');
		}

		//Cast the points to number
		let currentPoints = Number(pointsElement.text());

		if (currentPoints >= maxScore) {
			//Set colors
			if (!homeTurn) {
				$('#Home').children().eq(1).css('background-color', 'green');
				$('#Away').children().eq(1).css('background-color', 'red');
			} else {
				$('#Home').children().eq(1).css('background-color', 'red');
				$('#Away').children().eq(1).css('background-color', 'green');
			}

			//Remove events after reaching max points
			playBoard.off('click');
		}
	}
}