/* 
p5js Paragraph layout with pargraph split and line-by-line 
text-to-points function and parametric margins/space settings.
by k.donnachie, for Code Words, 2020
*/

/* 
Random walk techique created with help from 'The Coding Train' on youtube
VID HERE: https://www.youtube.com/watch?v=l__fEY1xanY&t=772s&ab_channel=TheCodingTrain
*/

/* 
Original droning sound mp3 sourced from SoundEffectFactory on YouTube (Royalty Free)
VID HERE: https://www.youtube.com/watch?v=IDfptfn9t1k&ab_channel=SoundEffectsFactory
*/

var font;
var points1 = [];
var margin = 50;
var topmargin = 80;
var para = "At the Guantanamo Bay prison in Cuba, an American extra-legal bastion located outside of any jurisdiction, prisoners caught in the ‘War on Terror’ were exposed to a range of experimental punitive methods, in order to have them disclose information about their alleged membership to terrorist networks. One of those advanced torture methods consisted of exposing kneeled, chained prisoners to (black) metal music played at concert volume with the same song repeating for hours.";
var words = para.split(' ');
var wx, wy;
var typesize = 197;
var spacesize = 50; //width of space between letters
var linesize = 200; //height between lines
var xPosition, yPosition;
var bounds;
var creepWords = [];
var song;


function preload(){
  font = loadFont('data/NewRocker-Regular.ttf');
  song = loadSound ('data/creepySound.mp3');
}


function setup() {
  createCanvas (windowWidth,windowHeight*9.87);
   song.play();
   song.loop();
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  background(206, 193, 154);
  textFont(font);
  textSize (typesize);
  wx = margin;
  wy = 140;
  fill(25,7,8);
  for (var w=0; w<words.length;w++){ 
     if (wx+textWidth(words[w])<=width-margin){
        points1 = font.textToPoints(words[w], wx, wy+50, typesize, 0.9);
       //stroke(5);
       text(words[w], wx, wy+50); //toggle off after debug...
       for (let i=0; i <points1.length; i++){
         //stroke(255,0,0); // of course you can make this red!
         strokeWeight();
         creepWords.push(new Creep (points1[i].x, points1[i].y));
        }
        wx+=textWidth(words[w])+spacesize;
      }
      else {
        wx=margin;
        wy+=linesize;
        w--;
      }
 }  
}


function draw(){
  
 for (var i=0; i<creepWords.length ; i++){
    creepWords[i].creep();
    creepWords[i].display();
      var volume = analyzer.getLevel();
  volume*=1.2;
  strokeWeight(volume);
  }
}


//CLASS CLASS
class Creep {  
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }
  creep() {
    //this.x += random (-2,2);
    //this.y += random (0,3);
    this.x += random (-3,3);
    this.y += random (-1,4);
    
    //speed = map(mouseY,0, windowHeight, 0,10);
    //this.x += random (-speed, speed);
    //this.y += random (-speed, speed);
  }
  display() {
    stroke(158,12,35);
    //textSize(this.textSize);
    //text(this.letter, this.x, this.y);
    point(this.x,this.y);
  }
}

function mouseWheel() {
    song.play();
    song.loop();
    //song.play();
    //song.volume(i++);
}

function mouseMoved() {
    song.play();
    song.loop();
    //song.volume(i++);
}

function mousePressed() {
    song.play();
    song.loop();
    //song.volume(i++);
}
