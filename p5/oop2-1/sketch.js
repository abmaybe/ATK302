var cars = [];

function setup() {
  // put setup code here
  createCanvas(800, 800);
  for (var i = 0; i < 50; i++) {
    cars.push(new Car());
  }
}

function draw() {
  // put drawing code here
  background(0);

  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
  }
  fill('white');
  triangle(mouseX - 15, mouseY, mouseX, mouseY - 25, mouseX + 15, mouseY);

}

function Car() {
  //attributes
  this.pos = createVector(100, 100);
  this.v = createVector(random(-5, 5), random(-5, 5));
  this.r = random(255);
  this.g = random(255);
  this.b = random(255);
  this.o = random(0);
  this.wl = random(100);

  //methods
  this.display = function() {
    stroke(this.r, this.g, this.b);
    fill(0);
    ellipse(this.pos.x, this.pos.y, this.wl, this.wl);
  }

  this.drive = function() {
    this.pos.add(this.v);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.x = height;

  }



}
