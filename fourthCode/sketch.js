let size = 50;
let widthMult = 10;
let heightMult = 100;

function setup() {
  createCanvas(400, 400, WEBGL); // Enable 3D rendering
}

function draw() {
  background(255, 255, 0); // Yellow background
  rotateX(frameCount * 0.05); // Rotate the scene around the x-axis
  rotateY(frameCount * 0.10); // Rotate the scene around the y-axis
  
  let rows = heightMult * size;
  let cols = widthMult * size;
  let spacing = 3;
  
  // Nested loops to draw shapes in a grid
  for (let i = 0; i < rows; i += size + spacing) {
    for (let j = 0; j < cols; j += size + spacing) {
      let x = j - cols / 10;
      let y = i - rows - 50;
      let z = sin(frameCount * 0.05 + x * 0.5 + y * 0.1) * 100; // Adjust depth based on x and y position
      let s = map(z, -150, 200, size * 0.5, size * 2); // Map z-coordinate to size
      
      push(); // Save the current transformation matrix
      translate(y,x, z); // Translate to the calculated position
      fill(191, 63, 127); // Pink color
      box(s); // Draw a pink box
      fill(0, 0, 139); // Dark blue color
       orbitControl();
      sphere(30, 6);
     // torus(s / 2, s / 4); // Draw a torus
      pop(); // Restore the original transformation matrix
    }
  }
}