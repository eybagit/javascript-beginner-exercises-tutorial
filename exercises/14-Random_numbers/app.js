function getRandomInt()
{
	let randomNumber = Math.random()*10;
	randomNumber = Math.floor(randomNumber);
	return randomNumber + 1;
}


console.log(getRandomInt());
