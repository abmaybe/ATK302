let mic;

function setup() {
  createCanvas(710, 200);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(200);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  fill('red');
  stroke(0);

  // Draw an ellipse with height based on volume
  let h = map(vol, 0, 1, height, 0);
  rect(20, h - 25, 100, 100);

  fill('orange');
  stroke(0)
  rect(120, h - 10, 100, 100);

  fill('yellow');
  stroke(0)
  rect(220, h - 15, 100, 100);

  fill('green');
  stroke(0)
  rect(320, h - 35, 100, 100);

  fill('blue');
  stroke(0)
  rect(420, h - 20, 100, 100);

  fill('purple');
  stroke(0)
  rect(520, h - 25, 100, 100);
}


// you need to click the screen before the mic input will work.
function touchStarted() {
  getAudioContext().resume();
}
