// start of wrapper (I will explain how this works later)
(async () => {
	// your code goes here! below this line

	let choice = -1; // initialize choice to -1, user has not made any choice yet

	while (choice != null) {
		// while choice is not null (nothing)
		// null in this case indicates the player cancelled out of the prompt

		let msg = ''; // initialize message to empty string
		let opt = [];

		if (choice == -1) {
			/* PART A0: Start your story! */
			msg =
				"It's a dark October night. You're staying up late coding but suddenly you hear a knock at your door!\n\n\t" +
				'1: Ask "Who is it?"\n\t' +
				'2: Ignore it and keep coding\n\t' +
				'3: Try to go to sleep';
			opt = [1, 2, 3];
		} else if (choice == 1) {
			/* PART A1: continue the story */
			msg =
				'You go and answer it and realize there is no one there. Then you fall unconscious and wake up in a dark alley way. There is someone guarding the exit so you can’t get out. What do you do?\n\n\t' +
				'4. get past him\n\t' +
				'5. wait for him to go\n\t' +
				'6. go to the door right next to you';
			opt = [4, 5, 6];
		} else if (choice == 2 || choice == 3) {
			msg = 'GAME OVER. They left you alone.';
		} else if (choice == 4) {
			msg = 'you try to get past him but he does not let you but after 7 hours of being stuck he lets you go GAME OVER';
		} else if (choice == 5) {
			msg = 'he leaves after 7 hours and lets you go GAME OVER';
		} else if (choice == 6) {
			msg =
				'You go to the door right next to you and you are instantly captured and brought into a cage. Then you hear a person on a speaker say “you have three options after ten minutes of surviving them the door will open and you will pass on to the next riddle. Which option is right?\n\n\t' +
				'7. Drop water into the cage ten minutes straight\n\t' +
				'8. Survive 2 crocodiles that are starving and will eat anything they see\n\t' +
				'9. Survive 100000 black widows waiting to eat someone';
			opt = [7, 8, 9];
		} else if (choice == 7) {
			msg =
				'You act smart and realize that the water will just pour out of the cage. Then you find yourself in a room with three doors and you say “again  I thought I got out! “ you realize that it is a tough choice (well that’s what you thought). What would you take?\n\n\t' +
				'10. $32979\n\t' +
				'11. 1 bitcoin\n\t' +
				'12. Just leave!';
			opt = [10, 11, 12];
		} else if (choice == 8) {
			msg = 'as soon as they see you they come rushing to you and eat you GAME OVER YOU DIED';
		} else if (choice == 9) {
			msg =
				'they go to you and they bite your legs within a few seconds thousands have bit you which causes you to die from venom poison 1 minute later GAME OVER YOU DIED';
		} else if (choice == 10) {
			msg =
				"You take the 32979 dollars not realizing that the one bitcoin is worth the same amount of money. Then you think that you are going to have another riddle because you could have just left. But you actually did leave so that's good. You arrive home and you have three choices on your mind\n\n\t" +
				'13. Sleep\n\t' +
				'14. Do some coding\n\t' +
				'15. Tell your family what happened';
			opt = [13, 14, 15];
		} else if (choice == 11) {
			msg =
				'the price bitcoin falls! you should have tooken the money. well at least you got out GAME OVER YOU GOT OUT AL:]\n\n\t' +
				'13. Sleep\n\t' +
				'14. Do some coding\n\t' +
				'15. Tell your family what happened';
			opt = [13, 14, 15];
		} else if (choice == 12) {
			msg =
				'you realize you would have gotten out anyways. you are frustrated and wish you took the money\n\n\t' +
				'13. Sleep\n\t' +
				'14. Do some coding\n\t' +
				'15. Tell your family what happened';
			opt = [13, 14, 15];
		} else if (choice == 13) {
			msg =
				'you go to bed terrified of what just happened and realized "if i wasn\'t so smart i would be dead" GAME OVER you sucessfully made it out alive\n\nthank you for playing!';
		} else if (choice == 14) {
			msg =
				'you go back to coding and realize "if i wasn\'t so smart i would be dead" GAME OVER you sucessfully made it out alive\n\nthank you for playing!';
		} else if (choice == 15) {
			msg =
				'you text your family and brag of how you were so smart to make it out alive and you tell them the whole story GAME OVER you sucessfully made it out alive\n\nthank you for playing!';
		}

		if (opt.length == 0) {
			await alert(msg);
			break;
		}

		// prompt the player to make choices
		let input = await prompt(msg);

		if (opt.includes(input)) {
			choice = input;
		} else {
			await alert('you made an invalid choice');
		}

		/* PART B0: end the game if there are no more choices to make */

		/* PART B1: check if the player made a valid choice, reject invalid choices */
	}

	exit(); // exits the game
})(); // end wrapper
