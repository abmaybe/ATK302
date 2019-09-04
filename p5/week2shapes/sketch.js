function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(720, 400);
  background(0);
  noStroke();
/*
  fill(204);
  triangle(18, 18, 18, 360, 81, 360);

  fill(0, 230, 0);
  rect(360, 400, 50, 100);

  fill(204);
  quad(189, 18, 216, 18, 216, 360, 144, 360);

  fill(255);
  ellipse(252, 144, 72, 72);

  fill(204);
  triangle(288, 18, 351, 360, 288, 360);

  fill(255);
  arc(479, 300, 280, 280, PI, TWO_PI);
}
*/

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
  ellipse(100, 100, 40, 40);

  fill(255);
  ellipse(125, 100, 40, 40);

  fill(255);
  ellipse(150, 100, 40, 40);

  fill(255);
  ellipse(175, 100, 40, 40);

  fill(255);
  ellipse(112.5, 75, 40, 40);

  fill(255);
  ellipse(137.5, 75, 40, 40);

  fill(255);
  ellipse(162.5, 75, 40, 40);

  fill(255);
  text(mouseX + ',' + mouseY, 20, 20);
}
