let systems = [];



function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let i = 0; i < systems.length; i++) {
    systems[i].addParticle()
    systems[i].update();
  }
}


function mousePressed() {
  systems.push(new Particlesystem(1, createVector(mouseX, mouseY)));
}
