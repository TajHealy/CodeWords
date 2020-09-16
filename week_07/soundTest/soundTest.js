var song;
var analyzer;
function preload() {
song = loadSound ('data/mLush.mp3');
}

function setup() {
  //song = loadSound ('data/beat.mp3'); //associate our sound to the variable 'song'
  createCanvas (windowWidth, windowHeight);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  background(0);
  fill(120);
  textSize(72);
  textAlign(CENTER);
  strokeWeight (5);
}


function draw() {
  //fill(120);
  var volume = analyzer.getLevel();
  volume*=100;
  //ellipse(width/2,height/2,volume*5,volume*5);
  fill((mouseX+mouseY)/4,255-mouseX/2,255-mouseY/2);
  stroke (volume);
  strokeWeight (mouseX/2,mouseY/2,volume*100,volume*100);
  ellipse (mouseX,mouseY,volume*35,volume*35);
  fill ((mouseY+mouseX)/4,255-mouseY/2,255-mouseX/2);
  textSize(volume*5);
  translate (width/2, height/2);
  rotate (volume*200);
  text('DANCE PARTY!', width/2, height/2);
  
}

function mousePressed() {
  if (song.isPlaying()) {
    background(0);
    song.stop(); // if the song is playing, stop it
    song.noLoop();
  }
  else {
    background(255);
    song.loop();
    song.play();
  }
}
