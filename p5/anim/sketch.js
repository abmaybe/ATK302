var x = 0 ;
var y = 0 ;
var y1 = 100 ;
var x1 = 100 ;

function setup() {
  // put setup code here
  createCanvas(200, 200);
}

function draw() {
  // put drawing code here
  background(100) ;
  rect(x, y1, 10, 10) ;
  x = x + 5 ;
  if (x > width) {
    x = 0 ;
    y1 = random(height) ;
  }

  rect(x1, y, 10, 10) ;
  y = y + 5 ;
  if (y > height) {
    y = 0 ;
    x1 = random(width) ;
  }

}
