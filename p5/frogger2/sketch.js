var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda, yodaR, yodaL ;
var bird1 ;

function setup() {

  createCanvas(800, 800);

  //spawn the cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }

  yodaR = loadImage("assets/yoda.gif");
  yodaL = loadImage("assets/yodaL.gif");
  yoda = yodaR ;

  bird1 = loadImage("assets/bird1.png");

  //initialize frog position
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
}

function draw() {

  switch (myState) {
    case 0:
      background('green');
      textSize(30);
      text("WELCOME TO FROGGER", 220, 400);
      break;

    case 1:
      game();

      timer++;
      if (timer > 1500) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2:
      fill(0);
      text('lose!', 100, 100);
      break;

    case 3:
      fill(0);
      text('win!', 100, 100);
      break;
  }

}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2: //this was the lose state
      reset();
      myState = 0;
      break;

    case 3: //win state
      reset();
      myState = 0;
      break;
  }

}

// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);


  // methods
  this.display = function() {
    fill(this.r, this.g, this.b);
//    rect(this.pos.x, this.pos.y, 100, 50);
//    ellipse(this.pos.x - 40, this.pos.y.y + 30, 25, 25);
//    ellipse(this.pos.x + 40, this.pos.y.y + 30, 25, 25);
image(bird1, this.pos.x, this.pos.y, 100, 100);
  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}

function keyPressed() {
  if (keyCode === LEFT_ARROW) yoda = yodaL ;
  if (keyCode === RIGHT_ARROW) yoda = yodaR ;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function game() {

  background(100);

  //iterate through the cars array
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    //test if this car is close to the frog
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  if (cars.length <= 0) {
    timer = 0;
    myState = 3; //win
  }

  // draw the frog
  fill('green');
//  ellipse(frogPos.x, frogPos.y, 60, 60);
image(yoda, frogPos.x, frogPos.y, 100, 100);
  checkForKeys();
}

function reset() {
  cars = []; //clear the array
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
}
