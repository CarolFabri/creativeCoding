---
Title: My First p5.js code
---

[Take a look at my first coding](/creativeCoding/firstcodeoriginal/index.html)

![An image of the process of creating my first creative coding](/creativeCoding/imagess/firtimage.png)
![An image of the process of creating my first creative coding](/creativeCoding/imagess/firtimage2.png)
![An image of the process of creating my first creative coding](/creativeCoding/imagess/firtimage3.png)

.[Wavy line!
This was my initial attempt at experimental coding, drawing inspiration from Steve's Makespace YouTube channel. In specific, a video called “Wavy Line Art-Maker” in this video teaches how to create a wavy line code, and he also left his coding at the description of the video, but for some reason the code wasn’t working on my end. So, I decided to use another code as a starting point. On the P5.js examples page, I found a nice code example. The code name is “Wavy Lines by Amy Goodchild.” The code is extremely simple, devoid of any emotion or effect, consisting only of simple, wavy lines. In order to enhance the complexity of this code and produce a distinctive final product, I employed some of the techniques we learned in the lecture tutorial during week four. What I most liked about this code was that it gave me the impression of an abstract art piece because of the background colour and wavy line shapes.
 
This was my longest code experiment; I’ve used different techniques. Here are some of the techniques I've used:
1.	To ensure consistent noise patterns across runs, I’ve used the “NoiseSeed” function.
2. To create this noise between the wavy lines, I’ve used “let totalW = width + maxWanderDistance * 5.” This calculates the total width, taking into account the maximum distance: "llet lineGap = totalW / numLines." To determine the horizontal spacing between.
3. In numLines, I've used loops to create an instance of wavy lines with varying colours and noise effects.
4.	To add time to the animated lines, I used "time increment."
5.	To set the wavy line just to a vertical position, the function trigonometric (sin(t)) was used to create periodic vertical movement of the lines.
6. We colour lines based on their index modulo 3, cycling through red, orange, and green.
I believe I've used more techniques, but because I started with existing code, I'm unsure of how to explain all the points and processes required to create this effect. I aimed to create an effect that randomly changes the colours of the wavy lines, but due to my lack of knowledge, I opted for simplicity.

Makerspace, S. (2022) Wavy Lines Art-Maker in P5.js Generative Art[Screencast]. Available at: Wavy Lines Art-Maker in p5.js Generative Art - YouTube (Accessed: 18/05/2024).
P5.js references (published date unsure) Wavy Lines by amygoodchild . Available at: p5.js Web Editor | Wavy Lines (p5js.org)Accessed: 19/04/2024). ].

.[Coding let lines = [];
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
}].
