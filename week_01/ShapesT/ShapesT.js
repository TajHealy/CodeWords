function setup() {
createCanvas (500,500);
background (0);
strokeWeight (0);
}


function draw() {
rect (0,0,500,500);
fill ((mouseY+mouseX)/4,255-mouseY/2,255-mouseX/2);
rect (50,50,400,125); //x1,y1,width,height
rect (175,150,150,250); //x1,y1,width,height
fill((mouseX+mouseY)/4,255-mouseX/2,255-mouseY/2);
}
