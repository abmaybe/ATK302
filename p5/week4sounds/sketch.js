var song1;

function preload() {
  song1 = loadSound('assets/[Deemo] M2U - Magnolia 中英字幕.mp3');
}

function setup() {
  // put setup code here
  createCanvas(1000, 1000);
  song1.play();
}

function draw() {

}

function mouseReleased() {
  if (song1.isPlaying())  {
  song1.pause() ;
} else (song1.play()) ;

}
