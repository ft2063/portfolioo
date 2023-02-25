// Sketch One
var a = function( p ) { 
  var i = 0;
  var canvas;

  p.setup = function() {
    canvas = p.createCanvas(document.documentElement.clientWidth * 0.8, document.documentElement.clientHeight *0.8);
    canvas.parent('c2'); // set the canvas parent element to the div with id "c2"
    p.angleMode(p.DEGREES);
  };

  p.draw = function() {
    p.background(14,14,104, 5);
  
    p.push();
    p.strokeWeight(1)
    p.translate(p.width/2, p.height/2)
    
    p.fill(255,254,2)
    p.ellipse(0,0,70)
    
    //mercury
    p.fill(231, 178, 0)
    p.rotate(i*32)
    
    p.ellipse(50,0,5)
    
    //venus
    p.fill(205, 96, 0)
    p.rotate(-i*10)
    p.ellipse(-75,0,10)
    
    //earth
    p.fill(71,139,204)
    p.rotate(-i*40)
    p.ellipse(100,0,7)
    
    //mars
    p.fill(205, 96, 5)
    p.rotate(i*50)
    p.ellipse(-125,0,20)
    
    //jupiter
    p.fill(255, 189, 41)
    p.rotate(i)
    p.ellipse(170,0,45)
    
    //saturnus
    p.fill(255,217,170)
    p.rotate(-i*80)
    p.ellipse(-220,0,40)
    
    //uranus
    p.fill(153, 207, 235)
    p.rotate(i*30)
    p.ellipse(260,0,15)
    
    //neptune
    p.fill(2,113,169)
    p.rotate(i*70)
    p.ellipse(-300,0,15)
    
    p.pop();
    i=i+0.005;
  };

  // resize the canvas when the window is resized
  window.addEventListener('resize', function() {
    p.resizeCanvas(document.documentElement.clientWidth * 0.8, document.documentElement.clientHeight *0.8);
  });
};
var myp5 = new p5(a, 'c2');

