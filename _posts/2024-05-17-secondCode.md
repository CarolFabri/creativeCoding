---
Title: Second Code 
Date: 2024-05-17
---

This is my second code project 
[Second Code](/creativeCoding/secondcodeoriginal/index.html)

![An image of the process of creating my second creative code](/creativeCoding/imagess/secondone.png)
![A second image of the process of creating my second creative code](/creativeCoding/imagess/secondtwo.png)
![A second image of the process of creating my second creative code](/creativeCoding/imagess/secondtwo2.png)

.[The starting point for this code was the variation lecture tutorial, which took place on week three. I wanted to create a code that was distinct from the typical 2D pattern. So, I’ve been trying to explore a 3D pattern. I discovered several YouTube tutorials, specifically from a channel named "Steve's Makerspace," and used various codes as a foundation for my 3D creation. 
My favourite part of this code is the 3D effect it has. I’ve tried to add different rotations to the code, but it didn’t work the way that I wanted to.
I used grids of pink boxes to generate this dynamic 3D visualisation. You can interactively rotate the scene by clicking and dragging the mouse.
Techniques
1.	I've utilised the "push and pop" function to accurately apply transformations to each shape. Also, “orbitControl” provides an intuitive way to navigate 3D space.
2.	To apply rotation, I used "rotateX (angleX)" and "rotateY (angleY)"; I also used this function to add mouse interactions.
3.	To create space between the grid's shapes, use "let spacing."
4.	I’ve used nested loops to iterate over the grid position.
5.	We used the functions "mousePressed, mouseReleased, and mouseDragged" for the user interaction. The first one sets gragging to true and records the mouse position when the user presses The second one also enables dragging when the mouse is not in the selected position. And the third calculates the change in the mouse position.
I’ve used more steps than that, but these are the fundamental ones: 
Furthermore, due to the movement code, I was unable to capture a clear screenshot. Different from the others, in my first experiment with this code, I added a rotating effect of 360 degrees in a fast-paced manner, which made it hard to capture further screenshots.
 
Webb, Dave. (2024) Week Three: Repetion Variation Chance [Screencast]. Available at: Document (bathspa.ac.uk) (Accessed: 20/04/2024).
Mercier, J. (2019) Animation of 3D GRID with Javascript [Screencast]. Available at: Animation of 3D GRID with Javascript (P5.js) - YouTube (Accessed: 21/05/2024).

].
.[Coding 
let size = 50;
let widthMult = 10;
let heightMult = 8; // Adjusted to fit within canvas

function setup() {
  createCanvas(400, 400, WEBGL); // Enable 3D rendering
}

function draw() {
  background(255, 255, 0); // Yellow background
  rotateX(frameCount * 0.001); // Slower rotation around the x-axis
  rotateY(frameCount * 0.05); // Slower rotation around the y-axis
  
  let rows = heightMult * size;
  let cols = widthMult * size;
  let spacing = 10;
  
  // Nested loops to draw shapes in a grid
  for (let i = 0; i < rows; i += size - spacing) {
    for (let j = 0; j < cols; j += size - spacing) {
      let x = j - cols / 3;
      let y = i - rows / 5;
      let z = sin(frameCount * 0.01 + x * 0.02 + y * 0.01) * 90; // Slower depth oscillation
      let s = map(z, -30, 10, size + 0.3, size - 1); // Map z-coordinate to size

      push(); // Save the current transformation matrix
      translate(x, y, z); // Translate to the calculated position
      
      // Alternate between different shapes
      if ((i + j) % 3 === 1) {
        fill(191, 63, 127); // Pink color
        box(s); // Draw a pink box
      } else if ((i + j) % 3 === 1) {
        fill(0, 0, 139); // Dark blue color
        sphere(s / 2); // Draw a dark blue sphere
      } else {
        fill(34, 139, 34); // Green color
        cone(s / 2, s); // Draw a green cone
      }
      
      pop(); // Restore the original transformation matrix
    }
  }

  // Draw a sphere at the center
  push();
  fill(255, 0, 0); // Red color
  translate(0, 0, sin(frameCount * 0.01) * 50); // Slower center sphere depth oscillation
  sphere(30); // Draw a sphere
  pop();
}].
