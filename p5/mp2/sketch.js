var myState = 0 ;
var myTimer = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  // put drawing code here
  switch(myState){
    case 0:
    background('red');
    textSize(72);
    text("R", 100, 100);
    }
    break ;

    case 1:
    background('green');
    textSize(72);
    text("E", 200, 200);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0;
      myState = 2;
    }
    break ;

    case 2:
    background('blue');
    textSize(72);
    text("S", 300, 300);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0;
      myState = 3;
    }
    break ;

    case 3:
    background('red');
    textSize(72);
    text("P", 400, 400);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0;
      myState = 4;
    }
    break ;

    case 4:
    background('green');
    textSize(72);
    text("E", 500, 500);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0;
      myState = 5;
    }
    break ;

    case 5:
    background('blue');
    textSize(72);
    text("C", 600, 600);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0;
      myState = 6;
    }
    break ;

    case 6:
    background('red');
    textSize(72);
    text("T", 700, 700);
    myTimer++
    if (myTimer >=200) {
      myTimer = 0;
      myState = 0;
    }
    break ;

  }
}


function mouseReleased() {
  if (myState == 0) {
    myState = 1 ;
  }
}
