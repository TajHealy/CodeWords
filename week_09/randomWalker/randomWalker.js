//random walk function from 'The Code Train' on youtube
function preload() {
  font = loadFont('data/blankenburg.ttf');
}

let points;
let bounds;
var x;
var y;
var myText= "At the Guantanamo Bay prison in Cuba, an American extra-legal bastion located outside of any jurisdiction, prisoners caught in the ‘War on Terror’ were exposed to a range of experimental punitive methods, in order to have them disclose information about their alleged membership to terrorist networks. One of those advanced torture methods consisted of exposing kneeled, chained prisoners to (black) metal music played at concert volume with the same song repeating for hours.";

function setup() {
  createCanvas (windowWidth,windowHeight*9);
  x = 400;
  y = 400;
  background(0);
  textFont("Times");
}


function draw() {
  textSize (150);
  noStroke();
  fill(250);
  textLeading(280);
  textAlign(CENTER);
  text(myText, int(windowWidth/40), windowHeight/6, int(windowWidth/4*3.8), windowHeight*9);
  
  
  stroke (200,0,0);
  strokeWeight(6);
  point(x,y,);
  
  var r = floor(random(-5,10));
switch (r) {
  case 0:
    x = x + 10;
      break;
   case 1:
     x = x - 5;
      break;
  case 2:
    y = y + 10;
      break;
  case 3:
    y = y - 20;
      break;
      

  }
}
