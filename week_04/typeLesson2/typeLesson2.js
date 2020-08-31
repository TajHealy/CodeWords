//codewords spinningType workshop 13 August
//code by Taj Healy
function preload() {
  font = loadFont ('data/FreightBigBlack.otf');
  font2 = loadFont('data/wildwordsitalic.ttf');
}

var spin=0;
var letterSize;

function setup() {
  createCanvas(600,600);
  background(240);
  fill(0);
  angleMode(DEGREES);
  textAlign(CENTER);
  frameRate(15);
}

function draw() {
  fill(0);
  translate (300,300);
  rotate(spin);
  textSize(letterSize);
  textFont(font2); 
  text ('Weeeeeeeeeeeeeeeeee',0,0);
  spin+=map(mouseX,0,600,-3,3);
  letterSize=map(mouseY,0,600,8,72);

  stroke(0);
  fill(240,30); 
 
  noStroke();
  fill(240,20);
  pop();
  background(240,30);
}
