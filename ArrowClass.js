//collaborators:Tony and Lamont 

function setup() {
 createCanvas(420, 420);
	colorMode = HSB;
}

var a = 35;
var changeInA = 4;
var b = 70;
var changeInB = 4;
var c = 105;
var changeInC = 4;
var d = 139;
var changeInD = 4;
var e = 175;
var changeInE = 4;
var f = 210;
var changeInF = 4;
var g = 175;
var changeInG = 4;
var h = 139;
var changeInH = 4;
var i = 105;
var changeInI = 4;
var j = 70;
var changeInJ = 4;
var k = 35;
var changeInK = 4;


function draw() {
  background(100);
  
	ellipse(a, 35, 35);
  a = a + changeInA;
  if (a > width) {
    changeInA = -4;
    fill (random (0,255), 100, 100)
  }
  
  if (a < 0) {
    changeInA = 4;
  }
  
  ellipse(b, 70, 35);
	b = b + changeInB;
  if (b > width) {
    changeInB = -4;
  }
  
  if (b < 0) {
    changeInB = 4;
  }
  
  ellipse(c, 105, 35);
  c = c + changeInC;
  if (c > width) {
    changeInC = -4;
  }
  
  if (c < 0) {
    changeInC = 4;
  }
  
  ellipse(d, 140, 35);
  d = d + changeInD;
  if (d > width) {
    changeInD = -4;
  }
  
  if (d < 0) {
    changeInD = 4;
  }
  
  ellipse(e, 175, 35);
  e = e + changeInE;
  if (e > width) {
    changeInE = -4;
  }
  
  if (e < 0) {
    changeInE = 4;
  }
  
  ellipse(f, 210, 35);
  f = f + changeInF;
  if (f > width) {
    changeInF = -4;
  }
  
  if (f < 0) {
    changeInF = 4;
  }
  
  ellipse(g, 245, 35);
  g = g + changeInG;
  if (g > width) {
    changeInG = -4;
  }
  
  if (g < 0) {
    changeInG = 4;
  }
  
  ellipse(h, 280, 35);
  h = h + changeInH;
  if (h > width) {
    changeInH = -4;
  }
  
  if (h < 0) {
    changeInH = 4;
  }
  
  ellipse(i, 315, 35);
  i = i + changeInI;
  if (i > width) {
    changeInI = -4;
  }
  
  if (i < 0) {
    changeInI = 4;
  }
  
  ellipse(j, 350, 35);
  j = j + changeInJ;
  if (j > width) {
    changeInJ = -4;
  }
  
  if (j < 0) {
    changeInJ = 4;
  }
  
  ellipse(k, 385, 35);
  k = k + changeInK;
  if (k > width) {
    changeInK = -4;
  }
  
  if (k < 0) {
    changeInK = 4;
  }
}
