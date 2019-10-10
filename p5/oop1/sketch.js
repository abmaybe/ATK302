var myCar ;
var myCar2 ;
var myCar3 ;

function setup() {
  // put setup code here
  createCanvas(800, 800);
  myCar = new Car () ;
  myCar2 = new Car () ;
  myCar3 = new Car () ;
}

function draw() {
  // put drawing code here
  background('green');

  myCar.display();
  myCar.drive();

  myCar2.display();
  myCar2.drive();

  myCar3.display();
  myCar3.drive();
}

function Car()  {
//attributes
  this.x = random(width);
  this.y = random(height);
  this.v = random(10); //velocity
  this.r = random(255); //color
  this.g = random(255);
  this.b = random(255);

//methods
  this.display = function() {
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, 100, 50);
  }

  this.drive = function() {
    this.x = this.x + this.v;
    if (this.x > width) this.x = 0;
  }
}
