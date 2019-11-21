var myState = 0;
var myTimer = 0;
let value = 0;
let mic;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  // put drawing code here
  fill(value);
  rect(25, 25, 50, 50);

  switch (myState) {
    case 0:
      background('red');
      textSize(72);
      text("HOME", width / 2, height / 2);
      myTimer++;
      if (mouseIsPressed) {
        myTimer = 0;
        myState = 100;
      }
      break;

    case 1:
      background('green');
      textSize(72);
      text("BOP IT", width / 2, height / 2);
      myTimer++;
      if (myTimer >= 500) {
        myState = 5;
      }

      if (mouseIsPressed) {
        myTimer = 0;
        myState = 100;
      }

      break;

    case 2:
      background('blue');
      textSize(72);
      text("SHAKE IT", width / 2, height / 2);
      myTimer++;
      if (myTimer >= 500) {
        myState = 5;
        myTimer = 0;
      }

      break;

    case 3:
      background('yellow');
      textSize(72);
      text("YELL IT", width / 2, height / 2);
      myTimer++;
      if (myTimer >= 500) {
        myTimer = 0;
        myState = 5;
      }
      console.log(vol);
      if (vol > 0.11) {
        myTimer = 0;
        myState = 100;
      }

      break;

    case 4:
      background('orange');
      textSize(72);
      text("PASS IT", width / 2, height / 2);
      myTimer++;
      if (myTimer >= 500) {
        myTimer = 0;
        myState = 100;
      }
      break;

    case 5:
      background('purple');
      textSize(72);
      text("LOSE", width / 2, height / 2);
      myTimer++;
      if (mouseIsPressed) {
        myTimer = 0;
        myState = 0;
      }
      break;

    case 100:
      myState = floor(random(0.5, 4.49));
      break;
  }
}

function deviceShaken() {
  if (myState == 2) {
    myState = 100;
    myTimer = 0;
  }
}

/*   function mouseReleased() {
    myState = myState + 1;
    if (myState > 6) {
    myState = 0;
    }
  }
   */
function touchStarted() {
  getAudioContext().resume();
}
