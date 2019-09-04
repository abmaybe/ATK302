function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(237, 34, 93);
    fill(0);

    if (mouseIsPressed) {
      ellipse(width/2, height/2, 50, 50);
    } else {
      rect(width/2, height/2, 50, 50);
    }

    print(mouseIsPressed);
}

function mouseReleased() {

  console.log(mouseX + ',' + mouseY) ;
}
