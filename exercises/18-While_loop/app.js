//fix this function:
function startCounting() {
	let counter = 100;
	let counter1 = 0;
	while (counter1 <= 100) {
		console.log(counter);
		counter1++;
		counter--;
	}

	return counter;
}

startCounting();