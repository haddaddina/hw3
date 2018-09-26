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

If an array has 5 elements in it, what are the valid index values for the array? (Hint: what's always the first index value?)
The index values of the array would start with zero and end with 5.

What is the difference between a for loop and a while loop?
The difference between while loop and for loop is that they accomplish the same thing yet a for loop would be shorter and more consice. 

Use Google or your favorite search website to figure out what the three parts of a for loop are called in JavaScript. 
The three different parts of the for loop are variable decleration, condition, and the increment statement.

How does code refer to the number of elements (aka "entries") in an array? (Hint: it shows up in the code you modified!)
The code refers to the array as y[i].

What's the point of an object?
The point of an object is to make coding a little simpler by declaring an object.

What's an example of a range you might use for the map function?
For example if you wanted to create an moving object between the height and width of the canvas you can use the map function to create a set of numbers in which the object can move within. 

What line of code would give me a random year in the last century?
random(1918, 2018)
