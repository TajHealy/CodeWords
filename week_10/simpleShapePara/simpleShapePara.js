/* 
p5js Paragraph layout with pargraph split and line-by-line 
text-to-points function and parametric margins/space settings.
by k.donnachie, for Code Words, 2020
*/

var font;
var points1 = [];
var margin = 80;
var topmargin = 80;
var para = "At the Guantanamo Bay prison in Cuba, an American extra-legal bastion located outside of any jurisdiction, prisoners caught in the ‘War on Terror’ were exposed to a range of experimental punitive methods, in order to have them disclose information about their alleged membership to terrorist networks. One of those advanced torture methods consisted of exposing kneeled, chained prisoners to (black) metal music played at concert volume with the same song repeating for hours.";
var words = para.split(' ');
var wx, wy;
var typesize = 140;
var spacesize = 45; //width of space between letters
var linesize = 280; //height between lines

var xPosition, yPosition;
var bounds;
//var creepWords = [];
//var vehicles = [];


function preload(){
  font = loadFont('data/NewRocker-Regular.ttf');
}


function setup() {
createCanvas (windowWidth,windowHeight*9.5);
background(0);
textFont(font);
 textSize (typesize);
  //stroke(200);
  //fill(255);
  //strokeWeight(2);
  //stroke(255);
  
}



function draw(){
  //background(0);
  //fill (0,50);
  wx = margin;
  wy = 200;
 for (var w=0; w<words.length;w++){ 
      if (wx+textWidth(words[w])<=width-margin){
      points1 = font.textToPoints(words[w], wx, wy+50, typesize, 0.9);
   //stroke(5);
   text(words[w], wx, wy+50); //toggle off after debug...
   for (let i=0; i <points1.length; i++){
   stroke(255,0,0);
   fill(255,0,0);
   strokeWeight(2);
   //point(points1[i].x, points1[i].y);
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

//function Vehicle(){
// this.pos = createVector(x,y);
// this.target = createVector(x,y);
// this.vel = createVector();
// this.acc = createVector();
//this.r=8;
//}
//vehicle.prototype.update=function(){
//this.pos.add(this.vel);
//this.vel.add(this.acc);
//}

//vehicle.prototype.show = function(){
//  stroke(255,0,0);
//   strokeWeight(10);
//   point(this.points1[i].x, this.points1[i].y);
//}

//CLASS ATTEMPT
//class Creep {  
//  constructor (x, y) {
//    this.x = x;
//    this.y = y;
//  }
//  creep() {
//    this.x += random (-2,2);
//    this.y += random (-2,2);
//    //speed = map(mouseY,0, windowHeight, 0,10);
//    //this.x += random (-speed, speed);
//    //this.y += random (-speed, speed);
//  }
//  display() {
//    textSize(this.textSize);
//    text(this.letter, this.x, this.y);
//  }
//}


//attempt at applying random walk to text
//function draw(){
//var r = floor(random(4));
//switch (r) {
//case 0:
//wx = wx = 1;
//    break;
//case 1:
//wx = wx = -1;
//  break;
//case 2:
//wy = wy = 1;
//  break;
//case 3:
//wy = wy = 1;
//  break;
  
//  }
//}
