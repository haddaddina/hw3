var x = 230;
var y = 120;
var puddle = 30
var ize = 5
var y0 = 120;
var y1 = 180;
var y2 = 220;


function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 100, x, 20, 50);

 	// draw drip
  ellipse(x, y, 10);
  ellipse(x, y0, 10);
  ellipse(x, y1, 10);
  ellipse(x, y2, 10);
  
    // draw puddle
  ellipse(230, 400 , puddle, ize);
  
  
  if (y > 380) {
  puddle = puddle + 0.05
   
  }
  if (y0 > 380) {
  puddle = puddle + 0.05
   
  }
  if (y1 > 380) {
  puddle = puddle + 0.05
   
  }
  if (y2 > 380) {
  puddle = puddle + 0.05
   
  }
  
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 9
  y0 = y0 + 9
  y1 = y1 + 9
  y2 = y2 + 9
  
  
  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 120;
   
    // if invisible for a full “height” amount, reset
  if (y0 > height*2) {
     y0 = 120;
  }

  if (y1 > height*2) {
     y1 = 120;
  }

  if (y2 > height*2) {
     y2 = 120;
  }
}
}
