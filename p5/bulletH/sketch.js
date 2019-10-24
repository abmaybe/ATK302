var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var yoda;
var height1 = 0;
var width1 = 0;
var timer1 = 0;
var width2 = 0;
var height2 = 0;

function setup() {

  createCanvas(800, 800);


  //spawn the cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }

  yoda = loadImage("assets/ship.png");

  bird1 = loadImage("assets/bird1.png");

  //initialize frog position
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);
  textAlign(CENTER);
}

function draw() {

  switch (myState) {
    case 0:
      background('#380087');

      stroke('yellow')
      fill('black');
      height1 = height1 + 5;
      width1 = width1 + 5 ;
      ellipse(width / 2, height / 2, height1, width1);
      timer1++;
      if (width1 > 1150) {
        width1 = 0;
      }
      if (height1 > 1150) {
        height1 = 0;
      }
      if (timer1 > 165) {
        height2 = height2 + 5;
        width2 = width2 + 5;
        fill('#380087');
        ellipse(width / 2, height / 2, height2, width2);
      }
      if (width2 > 1150) {
        width2 = 0;
      }
      if (height2 > 1150) {
        height2 = 0;
        timer1  = 0;
      }

      stroke('white');
      fill('black');
      textSize(30);
      text("SPACE AVOIDER", width / 2, height / 2);
      textSize(20);
      text("CLICK ANYWHERE TO BEGIN", width / 2, height / 1.8);

      break;

    case 1:
      game();
      timer++;
      break;

    case 2:
      fill('red');
      text('SCORE: ' + timer, 100, 100);
      break;

    case 3:
      fill('green');
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
  this.wl = random(100);


  // methods
  this.display = function() {
    stroke(this.r, this.g, this.b);
    fill(0);
    ellipse(this.pos.x, this.pos.y, this.wl, this.wl);
  }




  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}



function game() {

  background('black');

  //iterate through the cars array
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();

    //test if this car is close to the frog
    frogPos.x = mouseX;
    frogPos.y = mouseY;
    if (cars[i].pos.dist(frogPos) < 25) {
      myState = 2;
    }
  }

  if (cars.length <= 0) {
    timer = 0;
    myState = 3; //win
  }

  // draw the frog
  image(yoda, mouseX, mouseY, 35, 35);
}

function reset() {
  cars = []; //clear the array
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
}
