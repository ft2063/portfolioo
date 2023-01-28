var l = 500;
var counter = 0;
function setup(){
	createCanvas(windowWidth, windowHeight);
}
function draw(){
	background(0,20);

	var col = map(radians(counter*15),0, 255, 0, 255);
	translate(windowWidth/2, windowWidth/2); 

	
	rotate(radians(frameCount*15));

	// and draw the square at the origin
	fill(255,255-col, 255-col);
    ellipse(0,0, l,l*2);
	
    counter++;
  if (counter ==500) counter = 0
  
}