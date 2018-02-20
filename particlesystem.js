class Particlesystem {

  constructor(num, location) {
    this.location = location.copy();
    this.particles = [];
  }

  addParticle(x, y) {
    var r = random(1);
    r > 0.5 ? this.particles.push(new Particle(this.location)) : this.particles.push(new Rects(this.location));
  }


  update() {
    this.particles = this.particles.filter(p => !p.finished());

    for (let particle of this.particles) {
      particle.update();
      particle.display();
    }

  }

}
