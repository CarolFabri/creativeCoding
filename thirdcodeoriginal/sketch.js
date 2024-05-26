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


