function setup() {
createCanvas (500,500);

background (255,0,0);
}


function draw() {

noStroke();
fill (mouseX/2,(mouseX+mouseY)/4,mouseX/2);
rect (100,100,300,300); //rect(x1,y1,width,height)
fill ((mouseX+mouseY)/4,255-mouseX/2,255-mouseY/2);
ellipse (mouseX,mouseY,100,100); //(centre x, centre y, width, height)
stroke (0); //colour of stroke
line (100,100,400,400);
strokeWeight (5); //line thickness
line (100,100,400,400);
}
