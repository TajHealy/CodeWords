function preload(){
  font = loadFont('data/FreightBigBlack.otf');
}


var myText= "At the Guantanamo Bay prison in Cuba, an American extra-legal bastion located outside of any jurisdiction, prisoners caught in the ‘War on Terror’ were exposed to a range of experimental punitive methods, in order to have them disclose information about their alleged membership to terrorist networks. One of those advanced torture methods consisted of exposing kneeled, chained prisoners to (black) metal music played at concert volume with the same song repeating for hours.";
//var font;
var x, y;
var fontSize = 140;
var paragraph = [];
//var points;


function setup() {
createCanvas (windowWidth,windowHeight*9.4);
background(0);
textFont(font);
 textSize (fontSize);
  noStroke();
  fill(250);
  textLeading(280);
  textAlign(CENTER);
  //text(myText, int(windowWidth/40), windowHeight/9, int(windowWidth/4*3.8), windowHeight*9.4);
  //text(myText, windowWidth/40, windowHeight/9, windowWidth/4*3.8, windowHeight*9.4);
  text(myText, 80, 100, 1250, 18000);
  
  //var points = font.textToPoints(myText, 80, 100, 1250, 18000, 140);
  var points = font.textToPoints(myText, 80, 100, 140);

for(var i = 0; i < points.length; i++){
  var pt = points[i];
  stroke(0,255,0);
  strokeWeight(4);
  point(pt.x, pt.y);
}
}


function draw() {
}
