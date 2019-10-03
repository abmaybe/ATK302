var myState = 0;
var myTimer = 0;
var song1, song2, song3;
var sCrowd;
var mCrowd;
var lCrowd;
let mic;

function preload() {
  song1 = loadSound('assets/winter.mp3');
  song2 = loadSound('assets/spring.mp3');
  song3 = loadSound('assets/liszt.mp3');


  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();

}

function setup() {
  // put setup code here
  createCanvas(800, 600);
  sCrowd = loadImage('assets/smallcrowd.png');
  mCrowd = loadImage('assets/mediumcrowd.png');
  lCrowd = loadImage('assets/largecrowd.png');
  mic = new p5.AudioIn();
  mic.start();
  ellipseMode(CENTER);
}

function draw() {
  background(200);

  let vol = mic.getLevel();
  let h = map(vol, 0, 1);

  switch (myState) {


    case 0:
      textSize(72);
      text('CLASSICAL DJ STICK FIGURE');
      myState = 1;
      break;

    case 1:
      song1.play();
      if (h > 0.3) {
      myState = 2;
      }
      break;

    case 2:
      image(sCrowd, 600, 20, 150, 68);
      break;

    case 3:
      song2.play();
      if (h > 0.5) {
      myState = 4;
      }
      break;

    case 4:
      image(mCrowd, 450, 45, 250, 250);
      break;

    case 5:
      song3.play();
      myState = 6;
      break;

    case 6:
      image(lCrowd, 40, 40, 780, 330.2);
      break;

  }

  // head + body

  stroke(255);

  fill(0);
  rect(382, 245, 20, 150);

  fill(0);
  ellipse(390, 200, 100, 100);

  // table

  stroke(0);
  fill(235);
  rect(20, 400, 600, 300);

  fill(235);
  quad(85, 335, 685, 335, 620, 400, 20, 400);

  fill(235);
  quad(620, 400, 685, 335, 685, 555, 620, 600);

  // turntable 1

  fill('grey');
  quad(238, 341, 320, 341, 295, 395, 206, 395);

  fill(0);
  ellipse(264, 369, 67, 45);

  fill('yellow');
  ellipse(264, 369, 62, 40);

  fill(0);
  ellipse(264, 369, 57, 35);

  // turntable 2

  fill('grey');
  quad(431, 341, 509, 341, 500, 395, 417, 395);

  fill(0);
  ellipse(464, 369, 67, 45);

  fill('yellow');
  ellipse(464, 369, 62, 40);

  fill(0);
  ellipse(464, 369, 57, 35);

  // arm L

  stroke(255);
  fill(0);
  quad(266, 358, 382, 270, 382, 283, 278, 354);

  // arm R

  fill(0);
  quad(401, 270, 478, 359, 464, 352, 401, 282);

  //

  let vol = mic.getLevel();
  fill('red');
  stroke(0);

  let h = map(vol, 0, 1, height, 0);
  rect(20, h - 25, 100, 300);

  fill('orange');
  stroke(0)
  rect(120, h - 10, 100, 300);

  fill('yellow');
  stroke(0)
  rect(220, h - 15, 100, 300);

  fill('green');
  stroke(0)
  rect(320, h - 35, 100, 300);

  fill('blue');
  stroke(0)
  rect(420, h - 20, 100, 300);

  fill('purple');
  stroke(0)
  rect(520, h - 25, 100, 300);

  textSize(60);
  text('DJ STICK FIGURE', 98, 460);
}



function mouseReleased() {
  myState++;

  song1.pause();
  song2.pause();
  song3.pause();

  if (myState > 6) {
    myState = 0;
  }

  console.log(mouseX + ',' + mouseY);

}
