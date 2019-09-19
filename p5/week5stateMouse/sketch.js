var myState = 0 ;

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
    break ;

    case 1:
    background('green');
    textSize(72);
    text("E", 200, 200);
    break ;

    case 2:
    background('blue');
    textSize(72);
    text("S", 300, 300);
    break ;

    case 3:
    background('red');
    textSize(72);
    text("P", 400, 400);
    break ;

    case 4:
    background('green');
    textSize(72);
    text("E", 500, 500);
    break ;

    case 5:
    background('blue');
    textSize(72);
    text("C", 600, 600);
    break ;

    case 6:
    background('red');
    textSize(72);
    text("T", 700, 700);
    break ;

  }

}

function mouseReleased() {
  myState = myState + 1;
  if (myState > 6) {
  myState = 0;
  }
}
