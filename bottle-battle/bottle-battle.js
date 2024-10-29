const bottle = document.getElementById('bottle');
const spinButton = document.getElementById('spin-button');

const playerAnchors = document.querySelectorAll('.player-name-anchor');

let angle = 0;

function toggle() {
	var classList = greg.firstElementChild.classList;
	if (!classList.contains('won')) {
		classList.add('won');
	} else {
		classList.remove('won');
	}
}

spinButton.addEventListener('click', () => {
	playerAnchors[0].firstElementChild.classList.remove('won');
	playerAnchors[1].firstElementChild.classList.remove('won');

	const randomDegree = Math.floor(Math.random() * 360 * 2);
	angle += 4 * 360 + randomDegree;
	bottle.style.transform = `rotate(${angle}deg)`;
});

bottle.addEventListener('transitionend', () => {
	const winnerIdx = (angle + 90) % 360 <= 180 ? 0 : 1;
	playerAnchors[winnerIdx].firstElementChild.classList.add('won');
});