//original code by Taj Healy
function setup() {
createCanvas (500,500,WEBGL);
background (0);
strokeWeight (0);
}


function draw() {
noFill (0);

fill((mouseX+mouseY)/4,255-mouseX/2,255-mouseY/2);

rotateX(frameCount * 0.01);
rotateY(frameCount * 0.01);
box(250, 100);
strokeWeight(0.5);  
rotateX(frameCount * 0.0001);
rotateY(frameCount * 0.01);
box(10, 250);
sphere(100);

}
