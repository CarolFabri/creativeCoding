---
Title: Fourth Code
Date: 2024-05-17
---

My last code project
[Fourth Code!](/creativeCoding/fourthcodeoriginal/index.html)


![An image of the process of creating my code](/creativeCoding/imagess/noiseColour.png)
![An image of the process of creating my code](/creativeCoding/imagess/noiseColour2.png)
![An image of the process of creating my code](/creativeCoding/imagess/noiseColour3.png)

.[
My primary motivation for writing this code was to replicate a falling sand effect I'd seen on the YouTube channel "The Coding Train." However, the code proved to be quite extensive and complex. Since I don't fully understand the mechanism, I decided to use some of his code as a starting point and experiment with other techniques. I wanted to give this piece of code a vibrant atmosphere. I conducted an online search for various techniques, and upon discovering a YouTube channel named "Colourful Coding" with several colour-related tutorials, I utilised one of their codes as a foundation for my colour combinations. In addition to that, I experimented with various shapes, but the rectangle shape stood out to me the most. It gave the impression of stairs, perhaps an abstract effect, and stood out against the bright yellow background.
To create this dynamic and smooth transitioning visual effect, where the coloured rectangles appear at different positions on the canvas, with their colours and positions determined by Perlin noise, I’ve used different techniques, such as:
1.	First, I changed the background colour to this bright yellow/orange tone.
1.	I've used "Perlin noise" to generate smooth and continuous random values. Two offset variables, “Xoff” and "Yoff,”.
2.	To create this multiple colour palette, I’ve used the function “let r=map (noise(xoff*5),0,5,0,255;” This represents a Perlin noise value for the red colour component. “Let g=map(noise(uoff+20),0,1,0,255);” to the green component, and finally, “let b=map(noise(xoff+yoff+30),0,1,0,255;” to the blue component.
3.	I used the "rect" and "fill" functions to set the fill colours for the shapes and RGB values for the colours in order to draw the mixed colours of the rectangles.
4.	To ensure the next frame has slightly different noise values, I’ve used “Xoff” and “Yoff” again.
5.	

Shiffman, Daniel. (2024) Falling Santas[Screencast]. Available at: Coding Challenge 180: Falling Sand - YouTube (Accessed: 18/05/2024).
Unsure youtube channel name “Colorful Coding”. (2020) How to draw a colorful 3D sphere with circles in p5.js. Available at URL: How to draw a colorful 3D sphere with circles in p5.js | Coding Project #3 - YouTube (Accessed: 20/05/2024).  I watched several examples to get my coding references, however a few videos has been removed from this channel. 
].



.[let xoff = 0;
let yoff = 0;

function setup() {
  createCanvas(400, 400);
  background(255, 165, 0);
}

function draw() {
  // Generate noise values for x and y
  let x = noise(xoff) * width;
  let y = noise(yoff) * height;

  // Map noise values to color
  let r = map(noise(xoff * 5), 0, 5, 0, 255);
  let g = map(noise(yoff + 20), 0, 1, 0, 255);
  let b = map(noise(xoff + yoff + 30), 0, 1, 0, 255);

  // Set fill color
  fill(r, g, b);

  // Draw rectangle at noise-generated position
  rect(x, y, 50, 10);

  // Increment noise offset for smooth movement
  xoff += 0.05;
  yoff += 0.01;
}].
