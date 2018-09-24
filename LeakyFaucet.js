var x = 230;
var y = 120;
var puddle = 30
var ize = 5


function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 100, x, 20, 50);

  // draw puddle
  ellipse(230, 400 , puddle, ize);
  
 	// draw drip
  ellipse(x, y, 10);
  
  
  if (y > 380) {
  puddle = puddle + 0.05
   
  }
  
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 9
  
  
  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 120;
  }
}
