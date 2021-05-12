class Division{
    constructor(x, y, w, h) {
        var options = {
            'isStatic':true,
            'restitution':0.4,
            'friction':0.0,
            
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w=w;
        this.h=h;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(0);
        rect(pos.x, pos.y, this.w, this.h);
      }
}