const bottle = document.getElementById('bottle');
const spinButton = document.getElementById('spinButton');
const greg = document.getElementById('greg');
const priya = document.getElementById('priya');

let angle = 0;

spinButton.addEventListener('click', () => {
	greg.firstChild.style.animation = 'none';
	greg.firstChild.style.animation = '0.5s ease-out forwards grow, 1s pulse 0s infinite';
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