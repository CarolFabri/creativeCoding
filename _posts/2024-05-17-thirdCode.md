---
Title: Third Code
Date: 2024-05-17
---

[My Third code !](/creativeCoding/thirdcodeoriginal/index.html)


![An image of the process of creating my code](/creativeCoding/imagess/thirdimg.png)
![An image of the process of creating my code](/creativeCoding/imagess/thirdimg2.png)
![An image of the process of creating my code](/creativeCoding/imagess/thirdimg3.png)


.[
For this creative code, I wanted to create a marble effect in the background. I’ve looked at a few examples on YouTube and blogs, but I haven’t found what I was looking for. Therefore, I decided to create the marble effect using an image instead. To begin this coding, I used the lecture tutorial from week seven as a starting point, and I conducted online research to learn how to change the colour of the image and create a rotation effect.
Initially, the rotation effect revealed the image's edges, which I covered by enlarging the image to produce a gradual, natural rotation. At this stage, I was satisfied with the image effect, but something was missing. So, using the P5.js reference page, I’ve learned how to add a 3D cone shape and a rotation as well to give this nice 3D effect to the final piece.
I’ll write in details the techniques that I’ve applied to the code. 
I employed the following technique to create this code:
1.	Set a function to preload an image.
2.	To achieve this Photoshop effect, I changed the image's colour to yellow using the "tint" function.
3.	I've set the image at the center of the page, with a specified size to make it full screen while rotating.
4.	It resets all transformations applied to the canvas, so the following transformations only affect the cone. To do this, I’ve used the function "resetMatrix.”
5.	Using the translate function, move the cone to the center of the canvas.
6.	To rotate the cone around the Y-axis, I used the "coneRotation" value. Also, I’ve used the function “coneRotation +=0.2” to create an infinite rotation of the cone.
7.	I’ve used two different colours for the cone, using fill and stroke functions. I’ve used green and yellow colours to create this 3D effect.
8.	I’ve also made some changes to the code, by adding different colours to the marble image. Using let variable tintR, tintG and tintB.
Overall, this code is my showcase. I started from the beginning and worked my way up to its completion. I really like the effect that the code has. But I believe if I had more knowledge on how to use P5.js, I could add different techniques and effects to the code.
 Webb, Dave. (2024) Week Seven: Woking with Images[Screencast]. Available at: Document (bathspa.ac.uk) (Accessed: 18/04/2024).

].

.[
let marble;
let angle = 0; // Variable for image rotation
let coneRotation = 0; // Cone rotation variable 
let rotationSpeed = 0.02; //speed variable for code 

function preload() {
  marble = loadImage("marble.jpg", 
    () => console.log("Image loaded successfully"),
    (err) => console.error("Error loading image", err)
  );
}

function setup() {
  createCanvas(400, 400, WEBGL);
  describe('A cone spins around on a marble.');
}

function draw() {
  // Colours for background, added random colours, the ones that it works 
  let color1 = color(220, 20, 60); 
  let color2 = color(30, 144, 255); 
  let color3 = color(34, 139, 34); 

  // background colours set up 
  let t = (frameCount % 300) / 100; // 0 to 3 looping 
  let bgColor;

  if (t < 1) {
    bgColor = lerpColor(color1, color2, t);
  } else if (t < 2) {
    bgColor = lerpColor(color2, color3, t - 1);
  } else {
    bgColor = lerpColor(color3, color1, t - 2);
  }

  background(bgColor);

  // Add lighting
  ambientLight(150);
  pointLight(255, 255, 255, 100, 100, 100);

  // Dynamic tint color for the marble
  let tintR = 255 * sin(frameCount * 0.01 + 0);
  let tintG = 255 * sin(frameCount * 0.01 + TWO_PI / 3);
  let tintB = 255 * sin(frameCount * 0.01 + TWO_PI * 2 / 3);

  // Rotate the canvas for the marble
  push(); // start matrix transformation 
  rotate(angle);

  // Set the image to the centre of the canvas
  imageMode(CENTER);
  tint(tintR, tintG, tintB, 127);
  image(marble, 0, 0, 800, 800); // size 
  pop(); // Restore original transformation matrix

  // Translate cone position 
  push();
  translate(0, 50); 
  // cone rotation 
  rotateY(coneRotation);

  // Draw the cone
  fill(0, 255, 0); 
  stroke(255, 255, 0);
  cone(60, 100); //rotation adjustment 
  pop();

  
  coneRotation += rotationSpeed;

  
  angle += 0.001;
}

// Rotation function, based on key presses 
function keyPressed() {
  if (key === 'A' || key === 'a') {
    rotationSpeed += 0.01;
  } else if (key === 'D' || key === 'd') {
    rotationSpeed -= 0.01;
  }
}

].
