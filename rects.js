class Rects extends Particle {    //Make sure to put extended child after parent in index

display() {
  rectMode(CENTER);
  stroke(200,100,150,this.life);
  fill(200,100,150,this.life);
  push()
  translate(this.location.x,this.location.y);
  var angle = map(this.location.x ,0, width, 0, TWO_PI * 2)
  rotate(angle);
  rect(0,0, 10,10);
  pop()

}



}
