class Plinko{
    constructor(x, y, r) {
        var options = {
            'isStatic':false,
            'restitution':0.4,
            'friction':0.0,
            
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r=r;
        this.color = rgb(random(0,255), random(0,255), random(0,255));
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        stroke(this.color);
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}