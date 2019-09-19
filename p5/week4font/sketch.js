var pmfont;
var x = 0 ;

function preLoad() {
    pmfont = loadFont('assets/PMR.ttf');
}

function setup() {
  // put setup code here
  createCanvas(1000, 1000);
}

function draw() {
  fill('#ED225D');   // SETS the color
  textFont(pmfont);  // SETS the font
  textSize(36);	// SETS the size of the font
  text('HELLO WORLD', x, 50); // DISPLAYS TEXT WITH THE FONT
  x++ ;
  if (x > width) {
    x = 0 ;
  }
}
