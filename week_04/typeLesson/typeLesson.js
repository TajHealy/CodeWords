function preload() {
  font = loadFont ('data/FreightBigBlack.otf');
  font2 = loadFont('data/wildwordsitalic.ttf');
}


function setup() {
  createCanvas(600,600);
  background(200);
  fill(0);
}


function draw() {
  textSize(32);
  textFont(font2); //textFont(font,32);
  textAlign (CENTER);
  text ('hello world',300,300);
  textFont(font);
  textSize(8);
  text ('itty bitty' , 300,100);
  textSize(82);
  text ('BIIIG' , 300,500);
}
