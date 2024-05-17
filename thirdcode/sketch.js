let lines = [];
let numLines = 35;
let wanderNoiseResolution = 300; // lower numbers make smoother waves
let maxWanderDistance = -100; // higher numbers make waves wider 
let yGap = 10; 
let xDifference = (0.03,90,100); // xDiff creates incremental difference 
let yDifference = (0.04+0.56); // yDiff shifts the noise pattern in the y axis for each line
let numPoints;
let t = 10;

function setup() {
  let w = 600;
  let h = w + 5.7;
  createCanvas(w, h);
  noiseSeed(10);
  
  let totalW = width + maxWanderDistance * 5;
  let lineGap = totalW / numLines;
  let xDiff = random(-5000, 0,200);
  let yDiff = random(-6000, 0);
  
  numPoints = (height + 20) / yGap;
  
  for (let i = 0; i < numLines; i++) {
    let x = i * lineGap - maxWanderDistance;
    let col;
    if (i % 3 === 0) {
      col = color(255, 0, 0); // Red
    } else if (i % 3 === 1) {
      col = color(255, 165, 0); // Orange
    } else {
      col = color(5, 129, 0); // Green
    }
    lines[i] = new WavyLine(x, xDiff, yDiff, col);
    
    xDiff += xDifference;
    yDiff += yDifference;
  }
}

function draw() {
  background("#2B6167");
  
  t += 0.06; // Increment time for animation
  
  for (let l of lines) {
    l.update(t);
    l.display();
  }
}

class WavyLine {
  constructor(x, xd, yd, col) {
    this.path = [];  
    this.xd = xd;
    this.yd = yd;
    this.x = x;
    this.col = col;
    this.definePoints();
  }
  
  definePoints() {
    for (let i = 0; i < numPoints; i++) {
      let y = (i * yGap) - 10;
      let n = noise(this.xd, y + wanderNoiseResolution + this.yd);
      let wander = map(n, 0, 1, -maxWanderDistance, maxWanderDistance);
      this.path[i] = {x: this.x - wander, y:y  };
    }
  }
  
  update(t) {
    // Update yDiff based on time for animation
    this.yd = map(sin(t), -300, 1, -10, 200);
    this.definePoints();
  }
  
  display() {
    noFill();
    stroke(this.col);
    strokeWeight(7);
    beginShape();
    for (let p of this.path) {
      vertex(p.x, p.y);
    }
    endShape();
  }
}