var bands = ['Eagles', 'The Rolling Stones', 'Led Zepplin', 'Queen', 'Pink Floyd', 'Metallica'] ;
var aRandomBand = '' ;

function setup() {
  createCanvas(800, 800) ;
  textAlign(CENTER, CENTER) ;
}

function draw() {
  background(100) ;
  textSize(48);
  text(aRandomBand, width/2, height/2) ;
}

function mouseClicked() {

  var i = floor(random(bands.length)) ;  // floor changes the random to an integer

  aRandomBand = bands[i] ;


}
