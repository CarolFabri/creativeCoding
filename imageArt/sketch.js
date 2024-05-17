let marble;
let angle = 0; // Initial angle of rotation for the marble
let coneRotation = 0; // Initial rotation for the cone

function preload() {
  marble = loadImage("marble.jpg");
}

function setup() {
  createCanvas(400, 400, WEBGL);

  describe('A cone spins around on a marble.');
}

function draw() {
  background(220);

  // Increment angle to create continuous rotation for the marble
  angle += 0.001;

  // Rotate the canvas for the marble
  rotate(angle);

  // Draw the marble image at the center of the canvas
  imageMode(CENTER);
  tint(255, 255, 0);
  image(marble, 0, 0, 800, 800); // Adjust the size as needed

  // Reset translation and rotation for the cone
  resetMatrix();

  // Translate to the position for the cone
  translate(0, 50); // Adjust position as needed

  // Rotate the canvas for the cone
  rotateY(coneRotation);

  // Draw the cone
  fill(0, 255, 0); 
  stroke(255, 255, 0);
  cone(60, 100); // Adjust size as needed

  // Increment cone rotation for movement
  coneRotation += 0.02;
}