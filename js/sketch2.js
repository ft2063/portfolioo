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




// Sketch Two
var b = function( p ) { 
    p.setup = function() {
      canvas = p.createCanvas(document.documentElement.clientWidth * 0.8, document.documentElement.clientHeight *0.8);
      canvas.parent('c3'); // set the canvas parent element to the div with id "c2"
    p.angleMode(p.DEGREES)
    p.rectMode(p.CENTER)
  };

  p.draw = function() {
    p.background(10,20,30)
    p.noFill()
    p.translate(p.width/2, p.height/2)
    
    for (var i =0; i<200; i++){
      p.push()
      
      p.rotate(p.sin(p.frameCount+i)*100)
      
      var r = p.map(p.sin(p.frameCount), -1, 1, 50, 255)
      var b = p.map(p.sin(p.frameCount/4), -1, 1, 50, 255)
      p.stroke(r,p.random(200,250),b)
      p.rect(0,0,(400-i*3)/1.5,(600-i*3)/1.5, 200-i)
      p.pop()
      
    }

  };

  window.addEventListener('resize', function() {
    p.resizeCanvas(document.documentElement.clientWidth * 0.8, document.documentElement.clientHeight *0.8);
  });
};
var myp5 = new p5(b, 'c3');


// // Sketch Three
var c = function( p ) { // p could be any variable name
  var rotation = 0;
  var len = 100;
  p.setup = function() {
    canvas = p.createCanvas(document.documentElement.clientWidth * 0.8, document.documentElement.clientHeight *0.8);
    canvas.parent('c1'); // set the canvas parent element to the div with id "c2"
    p.angleMode(p.DEGREES);
    p.background(255)
  };

  p.draw = function() {
    p.background(0, 0, 0, 15);
  
    p.fill(0,255,0)
    p.translate(p.width/2, p.height/2)
    p.rotate(rotation)
    p.ellipse(len,0,10)
    
    
    p.fill(0,0,255)
    p.translate(len, 0)
    p.rotate(rotation)
    p.ellipse(len,0,10)
    
    p.fill(298,0,100)
    p.translate(len, 0)
    p.rotate(rotation*2)
    p.ellipse(len,0,10)
    
      
    
    p.translate(len, 0)
    p.rotate(rotation*3)
    p.fill(255,255,0)
    p.ellipse(len,0,10)
    
    
    p.translate(len, 0)
    p.rotate(rotation*3)
    p.fill(255,128,100)
    p.ellipse(len,0,10)
    
    
    
    p.translate(len, 0)
    p.rotate(rotation*3)
    p.fill(255,0,255)
    p.ellipse(len,0,10)
    
    p.translate(len, 0)
    p.rotate(rotation*2)
    p.fill(51,255,255)
    p.ellipse(len,0,10)
    
    p.translate(len, 0)
    p.rotate(rotation*2)
    p.fill(178,255,102)
    p.ellipse(len,0,10)
    
    rotation =  rotation + 2;
  };

  window.addEventListener('resize', function() {
    p.resizeCanvas(document.documentElement.clientWidth * 0.8, document.documentElement.clientHeight *0.8);
  });
};
var myp5 = new p5(c, 'c1');

