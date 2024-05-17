let xoff = 0;
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
}