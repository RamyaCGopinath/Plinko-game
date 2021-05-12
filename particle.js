class Particle{
    constructor(x, y, r) {
        var options = {
            'isStatic':true,
            'restitution':0.4,
            'friction':0.0,
            
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r=r;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(0)
        ellipseMode(CENTER);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}