var myState = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, 1000);
}

function draw() {
  // put drawing code here
  background(150);
  switch(myState) {
    case 0:
      textSize(15);
      text('A teenage boy is getting ready to take his girlfriend to prom.\n A teenage boy is getting ready to take his girlfriend to the prom. First he goes to rent a tux, but there\'s a long tux line at the shop and it takes forever.\n Next, he has to get some flowers, so he heads over to the florist and there\'s a huge flower line there. He waits forever but eventually gets the flowers. \n Then he heads out to rent a limo. Unfortunately, there’ s a large limo line at the rental office, but he\’ s patient and gets the job done.\n Finally, the day of the prom comes.The two are dancing happily and his girlfriend is having a great time.When the song is over, she asks him to get her some punch', 100, 100);

      break;

      case 1:
      textSize(15);
      text('so he heads over to the punch table and there’s no punchline', 100, 100);
      break;

  }
}
function mouseReleased() {
  myState++;
  if (myState > 1) {
    myState = 0;
}
}
