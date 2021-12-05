// screen width is 256, height is 192

let imgBall = spriteArt(
	`
..yyyy
.wyyyyw
yywyywyy
yywyywyy
yywyywyy
yywyywyy
.wyyyyw
..yyyy`
);

// the \n means new line
let imgPaddle = spriteArt(
	'.wwwwww.\nwwwwwwww\n' + 'ww.ww.ww\nwww..www\n'.repeat(21) + 'wwwwwwww\n.wwwwww.\n' + '..yyyy\n..gggg\n'.repeat(15)
);

/* PART A1: Make image for the wall */
let imgWall = spriteArt('u'.repeat(80), 4);

let wallT = createSprite(imgWall);
wallT.x = 0;
wallT.y = 20;

let wallB = createSprite(imgWall);
wallB.x = 0;
wallB.y = 180;

// places a ball in center of the screen
let ball = createSprite(imgBall);
ball.x = width / 2 - ball.w / 2;
ball.y = height / 2 - ball.h / 2;

/* PART A0: create two paddles, place on each end of the screen */
let paddleL = createSprite(imgPaddle);
paddleL.x = 5;
paddleL.y = height / 2 - paddleL.h / 2;

let paddleR = createSprite(imgPaddle);
paddleR.x = 251 - paddleR.w;
paddleR.y = height / 2 - paddleR.h / 2;

text('Tennis', 1, 3);

let ballVelocityY = 1;

function draw() {
	/* PART A1: draw the ball and paddles inside the p5 main draw function */
	// the `width` and `height` variables are the width and height of the screen
	background(0);

	if (ball.y + ball.h >= wallB.y) {
		ballVelocityY = -1;
	}

	if (ball.y <= wallT.y + wallT.h) {
		ballVelocityY = 1;
	}

	ball.y = ball.y + ballVelocityY;

	paddleL.y = mouseY;
	paddleR.y = mouseY;

	drawSprites();
}
