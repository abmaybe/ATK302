var x = 0;

function setup() {
  createCanvas(720, 400);
  background(0);
  noStroke();

  fill('#48b2f0');
  rect(0, 0, 720, 250);

  fill('#56c465');
  rect(0, 251, 720, 150)

  fill('#a85a32');
  rect(360, 300, 25, 100);

  fill('#17610e');
  ellipse(372, 270, 72, 72);

  fill('#f7c728');
  ellipse(500, 50, 72, 72);

  fill(255);
  ellipse(x, 100, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  ellipse(x + 25, 100, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  ellipse(x + 50, 100, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  ellipse(x + 75, 100, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  ellipse(x + 12.5, 75, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  ellipse(x + 37.5, 75, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  ellipse(x + 62.5, 75, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;
}

function draw() {

  fill('#48b2f0');
  rect(0, 0, 720, 250);

  fill('#a85a32');
  rect(360, 300, 25, 100);

  fill('#17610e');
  ellipse(372, 270, 72, 72);

  fill('#f7c728');
  ellipse(500, 50, 72, 72);

  fill(255);
  ellipse(x, 100, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  ellipse(x + 25, 100, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  ellipse(x + 50, 100, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  ellipse(x + 75, 100, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  ellipse(x + 12.5, 75, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  ellipse(x + 37.5, 75, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  ellipse(x + 62.5, 75, 40, 40);
  x = x + 1 ;
  if (x > 720) x = 0 ;

  fill(255);
  text(mouseX + ',' + mouseY, 20, 20);

}

function mouseReleased() {

  console.log(mouseX + ',' + mouseY) ;
}
