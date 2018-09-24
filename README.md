# hw3
What code draws the blades of grass?
stroke(random(60, 70), 100, 90);
line(x, height-10, x + random(-10, 10), height-10-random(h));
  
What code makes the "lawnmower" come by? How often does it come by?
if (random() > 0.999) {
    noStroke();
    fill(255);
    rect(-1, -1, width+2, height-15);
    h = 10;
  }
  
What's the point of the h variable?
The h variable represents how tall the grass is and is used so that the code knows how much to increase the height of the grass. 

What do the three numerical arguments of colorMode do?
Hue, Saturation, and Brightness. The hue is what color or shade its going to be. Saturation is how intense th ecolor is going to be. Brightness is the amount of light the color emits.   

What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
The angle in which the grass grows in the beginning so it would be the height which is 400 - 10 so then the grass grows at an angle of 390.  

What's the point of an object?

What's an example of a range you might use for the map function?

What line of code would give me a random year in the last century?
