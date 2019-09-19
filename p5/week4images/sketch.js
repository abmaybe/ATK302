var coon;
var font80;

function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  coon = loadImage("assets/utahcoon2.png");
  font80 = loadFont('assets/Monoton-Regular.ttf');
}

function draw() {
  // put drawing code here
  image(coon, 20, 20);
  //tint(200, 0, 100, 10);
  fill('#ED225D');   // SETS the color
  textFont(myFont);  // SETS the font
  textSize(36);	// SETS the size of the font
  text('HELLO WORLD', 10, 50); // DISPLAYS TEXT WITH THE FONT
}
