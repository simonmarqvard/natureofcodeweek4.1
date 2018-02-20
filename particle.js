class Particle {
  constructor(location) {
    this.location = location.copy();
    this.velocity = createVector(0,0.3);
    this.acceleration = createVector(random(-0.1,0.1), random(-0.1,0.1));
    this.life = 255;
  }


  display() {
    stroke(100,130,230,this.life);
    fill(100,130,230,this.life)
    ellipse(this.location.x, this.location.y, 10,10);
  }


  update() {
    this.location.add(this.velocity);
    this.velocity.add(this.acceleration);

    this.life = this.life - 5;
  }

  finished() {
   return (this.life < 0); // if true return true if false return false
  }

}
