// start of wrapper (I will explain how this works later)
(async () => {
	// your code goes here! below this line
	// your code goes here! below this line
	/* PART A: Make a random number between 1-100 */
	let num = Math.random() * 100;
	// round up to nearest whole integer
	num = Math.ceil(num);
	let guess;
	while (guess != num) {
		guess = await prompt('guess a number 1-100');
		console.log(guess);
		if (guess < num) {
			await alert('Your guess was too low');
		} else if (guess > num) {
			await alert('Your guess was too high');
		} else if (guess == num) {
			await alert('You got it!');
		}
	}
	exit(); // this function exits the game
})(); // end
