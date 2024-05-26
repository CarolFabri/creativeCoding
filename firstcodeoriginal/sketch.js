let lines = [];
let numLines = 35;
let wanderNoiseResolution = 40; // Lower nums create smoother waves 
let maxWanderDistance = -60; // High nuns can create wider waves  
let yGap = 10; 
let xDifference = 0.13; // xDiff creates incremental difference 
let yDifference = 0.24; // yDiff shifts the noise pattern in the y axis for each line
let numPoints;
let t = 250;

function setup() {
  let w = 600;
  let h = w *1;
  createCanvas(w, h);
  noiseSeed(5);
  
  let totalW = width + maxWanderDistance * 5;
  let lineGap = totalW / numLines;
  let xDiff = random(-5000, 0);
  let yDiff = random(-6000, 0);
  
  numPoints = (height + 20) / yGap;
  
  for (let i = 0; i < numLines; i++) {
    let x = i * lineGap - maxWanderDistance;
    let col;
    if (i % 3 === 0) {
      col = color(220, 10, 60); // wanted orange but didn't manage to change red to orange 
    } else if (i % 3 === 1) {
      col = color(30, 144, 255); // 
    } else {
      col = color(34, 139, 34);//
    }
    lines[i] = new WavyLine(x, xDiff, yDiff, col);
    
    xDiff += xDifference;
    yDiff += yDifference;
  }
}

function draw() {
  background("#2B6167");
  
  t -= 0.05; // animmation timing
  
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
    
    this.yd = map(sin(t), -600, 1, -10, 200);
    this.definePoints();
  }
  
  display() {
    noFill();
    stroke(this.col);
    strokeWeight(7);
    beginShape();
    vertex(this.path[2].x, this.path[0].y); //Start point and control for x and y
    for (let i = 1; i < numPoints - 1; i++) {
      let xc = (this.path[i].x + this.path[i + 1].x) / 2; 
      let yc = (this.path[i].y + this.path[i + 1].y) / 2; 
      bezierVertex(this.path[i].x, this.path[i].y, xc, yc, xc, yc); // Create a bezier curve
    }
    endShape();
  }
}