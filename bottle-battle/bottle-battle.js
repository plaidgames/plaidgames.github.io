const bottle = document.getElementById('bottle');
const playerNameElements = document.querySelectorAll('.player-name');

let angle = 0;

bottle.addEventListener('transitionend', () => {
	const winnerIdx = angle % 360 <= 180 ? 0 : 1;
	const classList = playerNameElements[winnerIdx].classList;
	classList.add('won');
	classList.remove('init');
});

function randomSpin() {
	playerNameElements[0].classList.remove('won');
	playerNameElements[1].classList.remove('won');

	const randomDegree = Math.random() * 360 * 2;
	angle += 6 * 360 + randomDegree;
	bottle.style.transform = `rotate(${angle}deg)`;
}

function debugToggleWin() {
	var classList = playerNameElements[0].classList;
	if (!classList.contains('won')) {
		classList.add('won');
		classList.remove('init');
	} else {
		classList.remove('won');
	}
}

bottle.addEventListener('click', () => randomSpin());

let debug = false;
document.body.addEventListener('keydown', (event) => {
	if (event.target != document.body) {
		return;
	}

	if (event.code == 'KeyS') {
		randomSpin();
	} else if (event.code == 'KeyW') {
		debug = true;
	} else if (event.code == 'Digit1' && debug) {
		debugToggleWin();
	} else if (event.code == 'KeyA' && debug) {
		randomSpin();
	} else if (event.code == 'KeyD' && debug) {
		randomSpin();
	} else if (event.code.startsWith('Key')) {
		debug = false;
	}
});