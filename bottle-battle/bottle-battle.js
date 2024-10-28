const bottle = document.getElementById('bottle');
const spinButton = document.getElementById('spinButton');

const playerAnchors = document.querySelectorAll('.player-name-anchor');
const greg = playerAnchors[0];
const priya = playerAnchors[1];

let angle = 0;

spinButton.addEventListener('click', () => {
	//greg.firstElementChild.style.animation = 'none';
	//greg.firstElementChild.style.animation = ';

	var classList = greg.firstElementChild.classList;
	if (!classList.contains('won')) {
		classList.add('won');
	} else {
		classList.remove('won');
	}

	/*
		greg.style.animation = 'none';
		priya.style.animation = 'none';
		greg.style.transform = 'translateY(-50%) scale(1)';
		priya.style.transform = 'translateY(-50%) scale(1)';
		
		const randomDegree = Math.floor(Math.random() * 360 * 2);
		angle += 3 * 360 + randomDegree;
		bottle.style.transform = `rotate(${angle}deg)`;

		setTimeout(() => {
			if (randomDegree % 360 <= 180) {
				greg.style.transform = 'translateY(-50%) scale(5)';
				setTimeout(() => {
					greg.style.animation = 'pulse 1s infinite';
				}, 500); // Wait for initial transform to complete before pulsing
			} else {
				priya.style.transform = 'translateY(-50%) scale(5)';
				setTimeout(() => {
					priya.style.animation = 'pulse 1s infinite';
				}, 500); // Wait for initial transform to complete before pulsing
			}
		}, 2000);
	*/
});