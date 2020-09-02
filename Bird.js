class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.trail = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
  if(this.body.velocity.x > 10 && this.body.position.x>200){
    var position = [this.body.position.x,this.body.position.y]
    this.trail.push(position)}
    for(var I = 0 ; I < this.trail.length;I++)
    {
    image(this.smokeImage,this.trail[I ][0],this.trail[I][1])
    }

    super.display();
  }
}
