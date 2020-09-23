// Celia
// Edit by Taj Healy
function setup() {
createCanvas (500,500);
background (250,248,242);
}

function draw() {
  
//fill (50);
fill (250-mouseY, (mouseY+mouseX)/4, mouseY/2);
strokeWeight (0);
triangle (125,175, 125,350, mouseX,mouseY); //light
triangle (125,175, 225,350, mouseX,mouseY); //light
triangle (325,175, 325,350, mouseX,mouseY); //light
triangle (325,175, 400,175, mouseX,mouseY); //light
//fill (0);
fill (100,100,100-mouseY, (mouseY+mouseX)/4, mouseY/2);
triangle (100,175, 125,175, mouseX,mouseY); //dark
triangle (100,350, 150,350, mouseX,mouseY); //dark
triangle (225,350, 275,350, mouseX,mouseY); //dark
triangle (300,350, 400,350, mouseX,mouseY); //dark



strokeWeight (5);
//stroke (250-mouseX, (mouseX+mouseY)/4, mouseX/2);
stroke (0);
line (125,175,125,350);
line (225,350,325,175);
line (100,350,150,350);
line (100,175,175,175);
line (325,175,400,175);
line (300,350,400,350);
//fill (250-mouseX, (mouseX+mouseY)/4, mouseX/2);
stroke (0);
rect (325,175,50,175);
quad (125,175,175,175,275,350,225,350);
}
