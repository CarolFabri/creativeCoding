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
}