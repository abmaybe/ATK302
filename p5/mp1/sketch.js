var x = 0 ;

function setup() {
  createCanvas(2000, 1350);
  background(210)
}

function mousePressed() {

  push() ;
  translate(x, 20) ;
  x = x + 3 ;
  if (x > width) {
    x = 0;
  }
  fireball() ;
  pop() ;

  fill('#42fff2');
  rect(1020, 750, 30, 30);

  fill('#42fff2');
  rect(1065, 750, 30, 30);

  fill('#42fff2');
  rect(1005, 665, 100, 100);

  fill(255);
  ellipse(1040, 697, 13, 13);

  fill(255);
  ellipse(1085, 697, 13, 13);

  fill(0);
  rect(1020, 690, 30, 7);

  fill(0);
  rect(1065, 690, 30, 7);

  fill(0);
  rect(1040, 725, 30, 5);

}

function mouseReleased() {

  push() ;
  translate(x, 20) ;
  x = x + 3 ;
  if (x > width) {
    x = 0;
  }
  iceball() ;
  pop() ;

  stroke(0);
  fill('#ff6817');
  rect(1020, 750, 30, 30);

  fill('#ff6817');
  rect(1065, 750, 30, 30);

  fill('#ff6817');
  rect(1005, 665, 100, 100);

  fill(255);
  ellipse(1040, 697, 13, 13);

  fill(255);
  ellipse(1085, 697, 13, 13);

  fill(0);
  rect(1020, 690, 30, 7);

  fill(0);
  rect(1065, 690, 30, 7);

  fill(0);
  rect(1040, 725, 30, 5);

  console.log(mouseX + ',' + mouseY) ;
}

function fireball() {
  noStroke();
  fill('#1261ff');
  triangle(1164, 730, 1190, 730, 1190, 720);

  fill('#1261ff');
  triangle(1164, 710, 1190, 710, 1190, 720);

  stroke('#1261ff');
  fill('#42fff2');
  ellipse(1190, 720, 23, 23);
}

function iceball() {
  noStroke();
  fill('#ffc517');
  triangle(1164, 730, 1190, 730, 1190, 720);

  fill('#ffc517');
  triangle(1164, 710, 1190, 710, 1190, 720);

  stroke('#ffc517');
  fill('#ff6817');
  ellipse(1190, 720, 23, 23);

}
