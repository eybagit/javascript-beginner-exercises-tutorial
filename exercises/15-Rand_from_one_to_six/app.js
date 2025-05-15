function getRandomInt()
{
	let randomNumber = Math.random()*6;
	randomNumber= Math.floor(randomNumber);
	return randomNumber+1;
}
console.log(getRandomInt());