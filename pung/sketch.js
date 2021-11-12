var ball;
var ballImg;
var paddle;
var edges;
var score = 0;

function preload() {
  ballImg = loadAnimation("images/ball.png");
}

function setup() {
  createCanvas(400, 400);

  // set up ball
  ball = createSprite(200, 200);
  ball.addAnimation("ball", ballImg);
  ball.scale = 0.1;

  //set up paddle
  paddle = createSprite(200, 370, 100, 10);

  //make edge sprites
  edges = createEdgeSprites();

  //move ball
  ball.velocityX = 5;
  ball.velocityY = -3;
}

function draw() {
  background("black");

  //score
  fill(255, 255, 255);
  text("SCORE: " + score, 10, 20);

  //make paddle move
  paddle.x = World.mouseX;

  // bounce ball off edges
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);

  //bounce ball off paddle
  if (ball.isTouching(paddle)) {
    score += 1;
    ball.bounceOff(paddle);
    if (ball.velocityX < 28) {
      ball.velocityX += 2;
    }
    if (ball.velocityY > -28) {
      ball.velocityY -= 2;
    }
  }

  //getting out
  if (ball.y > 400) {
    ball.x = 200;
    ball.y = 200;
    ball.velocityX = 5;
    ball.velocityY = -3;
    console.log("OOF!!")
    if (getItem("score")) {
      console.log("Theres a db")
    }
  }

  drawSprites();
}