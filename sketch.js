let flock = [];
let perceptionRadius = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 150; i++) {
    flock.push(new Boid(random(width), random(height)));
  }
  background(17);
}

function draw() {
  background(17, 30); // Slight trail effect

  for (let boid of flock) {
    boid.flock(flock);
    boid.update();
    boid.display();
  }
}
