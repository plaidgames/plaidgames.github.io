const bottle = document.getElementById('bottle');
const playerNameElements = document.querySelectorAll('.player-name');

let angle = 0;

function angleToWinnerIdx(angle) {
	return angle % 360 <= 180 ? 0 : 1;
}

class WinnerIdxSampler {
	#decay;
	#mean = 0.5;

	constructor(decay) {
		this.#decay = decay;
	}

	addToHistory(winnerIdx) {
		this.#mean = this.#decay * winnerIdx + (1 - this.#decay) * this.#mean;
	}

	sample() {
		return Math.random() < this.#mean ? 0 : 1;
	}
}
const winnerIdxSampler = new WinnerIdxSampler(1/3);

bottle.addEventListener('transitionend', () => {
	const winnerIdx = angleToWinnerIdx(angle);
	winnerIdxSampler.addToHistory(winnerIdx);
	const classList = playerNameElements[winnerIdx].classList;
	classList.add('won');
	classList.remove('init');
});

function sampleNextAngle(nextWinnerIdx) {
	while (true) {
		const randomDegree = Math.random() * 360 * 2;
		const nextAngle = angle + 6 * 360 + randomDegree;

		if (angleToWinnerIdx(nextAngle) != nextWinnerIdx) {
			continue;
		}
		
		const margin = 90 - Math.abs(nextAngle % 180 - 90);
		if (margin < 3) {
			continue;
		}

		return nextAngle;
	}	
}

function spin(nextWinnerIdx) {
	angle = sampleNextAngle(nextWinnerIdx);
	bottle.style.transform = `rotate(${angle}deg)`;

	playerNameElements[0].classList.remove('won');
	playerNameElements[1].classList.remove('won');
}

function randomSpin() {
	let nextWinnerIdx = winnerIdxSampler.sample();
	spin(nextWinnerIdx);
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
		spin(0);
	} else if (event.code == 'KeyD' && debug) {
		spin(1);
	} else if (event.code.startsWith('Key')) {
		debug = false;
	}
});