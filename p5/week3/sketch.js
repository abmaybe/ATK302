var score = 0

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER) ;
}

function draw() {

  fill(210);
  ellipse(width/2, height/2, 100, 100);

  fill(210);
  ellipse(width/2, height/2.5, 75, 75);

  fill(210);
  ellipse(width/2, height/3, 50, 50)

  text(score, 30, 30)

}


function mouseReleased() {

  //background(random(255), random(255), random(255)) ;
  fill(random(255), 0, 0);
  ellipse(mouseX, mouseY, 50, 50);
  stroke(random(255), 0, 0);
  stokeWeight(random(4));
  score++
}
