
var h = 30;
var x = 20;
r = 0;
g = 0;
b = 0;
function setup() {
  canvas = createCanvas(400, 400);
  canvas.parent('sketch1')
  noStroke();
}

function draw() {
  background(0,10);
  stroke(r,g,b);
  strokeWeight(10);
  var col = map(mouseX,0, 400, 0, 255);
  
  fill(255,255-col, 255-col);
  ellipse(mouseX, mouseY, 10);
  triangle(mouseX -400/10,mouseY -400/10, mouseX, mouseY, mouseX+400/10, mouseY-400/10)
  ellipse(mouseX,mouseY +h/2, x,h)
  r = random(255);
  g = random(255);
  b = random(255);
  
  
  
}
