const bottle = document.getElementById('bottle');
const spinButton = document.getElementById('spin-button');

const playerAnchors = document.querySelectorAll('.player-name-anchor');

let angle = 0;

function toggle() {
	var classList = playerAnchors[0].firstElementChild.classList;
	if (!classList.contains('won')) {
		classList.add('won');
		classList.remove('init');
	} else {
		classList.remove('won');
	}
}

bottle.addEventListener('click', () => {
	playerAnchors[0].firstElementChild.classList.remove('won');
	playerAnchors[1].firstElementChild.classList.remove('won');

	const randomDegree = Math.random() * 360 * 2;
	angle += 4 * 360 + randomDegree;
	bottle.style.transform = `rotate(${angle}deg)`;
});

bottle.addEventListener('transitionend', () => {
	const winnerIdx = angle % 360 <= 180 ? 0 : 1;
	const classList = playerAnchors[winnerIdx].firstElementChild.classList;
	classList.add('won');
	classList.remove('init');
});

document.body.addEventListener('keydown', (event) => {
	if (event.target != document.body) {
		return;
	}

	if (event.key == 's') {
		toggle();
	}
});