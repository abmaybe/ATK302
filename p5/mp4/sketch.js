var myState = 0 ;
var myTimer = 0;
let value = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here
  fill(value);
  rect(25, 25, 50, 50);

  switch(myState){
    case 0:
    background('red');
    textSize(72);
    text("HOME", width/2, height/2);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0;
      myState = 1;
    }
    break ;

    case 1:
    background('green');
    textSize(72);
    text("BOP IT", width/2, height/2);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0;
      myState = 2;
    }
    break ;

    case 2:
    background('blue');
    textSize(72);
    text("SHAKE IT", width/2, height/2);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0;
      myState = 3;
    }
    break ;

    case 3:
    background('yellow');
    textSize(72);
    text("YELL IT", width/2, height/2);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0;
      myState = 4;
    }
    break ;

    case 4:
    background('orange');
    textSize(72);
    text("PASS IT", width/2, height/2);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0;
      myState = 5;
    }
    break ;

    case 5:
    background('purple');
    textSize(72);
    text("LOSE", width/2, height/2);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0;
      myState = 0;
    }
    break ;

  }
}

function deviceShaken() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
