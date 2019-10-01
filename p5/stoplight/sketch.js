var myState = 0;
var myTimer = 0;
var x = 0;
var vel = 3;

function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {

  background(130);

  fill('yellow');
  rect(width / 2, height / 2, 105, 305);

  fill(0);
  rect(width / 2, height / 2, 100, 300);

  fill('#1f4706');
  ellipse(width / 2, height / 1.65, 55, 55);

  fill('#a8ab09');
  ellipse(width / 2, height / 2, 55, 55);

  fill('#7d0000');
  ellipse(width / 2, height / 2.5, 55, 55);

  switch (myState) {
    case 0:
      fill('green');
      ellipse(width / 2, height / 1.65, 50, 50);
      myTimer++
      if (myTimer >= 200) {
        myTimer = 0;
        myState = 1;
      }
        vel = 3;
      break;

    case 1:
      fill('yellow');
      ellipse(width / 2, height / 2, 50, 50);
      myTimer++
      if (myTimer >= 200) {
        myTimer = 0;
        myState = 2;
      }
        vel = 2;
      break;

    case 2:
      fill('red');
      ellipse(width / 2, height / 2.5, 50, 50);
      myTimer++
      if (myTimer >= 250) {
        myTimer = 0;
        myState = 0;
      }
        vel = 0;
      break;
  }
  fill('purple');
  rect(x, height - 100, 80, 60);
  x = x + vel;
  if (x > width) {
    x = 0;
  }

}
