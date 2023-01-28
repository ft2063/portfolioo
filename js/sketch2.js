var y = 0;
var x = 0;
r = 0;
g = 0;
b = 0;

var ySpeed = 50;
var xSpeed = 50;


function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight/1.2);
  canvas.parent('sketch2')
}

function draw() {
  background(0,6);
  fill(r,g,b);
  ellipse(x,y,50);
  ellipse(y,x,200);
  
  if(y>height){ySpeed = -ySpeed;}
  if (y<0) ySpeed = - ySpeed;
  
  if (x>width)xSpeed = -xSpeed;
  if(x<0) xSpeed = -xSpeed;
  
  y+= ySpeed;
  x+=xSpeed;
  r = random(255);
  g = random(255);
  b = random(255);
  
}