const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var particles = [];
var divisions = [];
var plinkos = [];

var divisionHeight = 300;

function setup() {
  createCanvas(500,600);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(250,600,500,30);

  for(var k=-1; k<=500; k=k+100){
    divisions.push( new Division(k, height-divisionHeight/2, 10, divisionHeight) );
  }

  for(var i=40;i<500;i=i+50){
    particles.push( new Particle(i,100,10) );
  }


  for(var i=15;i<500;i=i+50){
    particles.push( new Particle(i,150,10) );
  }

  for(var i=40;i<500;i=i+50){
    particles.push( new Particle(i,200,10) );
  }

  for(var i=15;i<500;i=i+50){
    particles.push( new Particle(i,250,10) );
  }

  
  Engine.run(engine);
}

function draw() {
  console.log(frameCount);
  background("cyan");  
  ground.display();
  for(var i=0;i<particles.length;i++){
    particles[i].display();
  }

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  if(frameCount%60 == 0){
    plinkos.push(new Plinko(random(20,480), 10, 10));
  }
  for(var k=0;k<plinkos.length;k++){
    plinkos[k].display();
  }

 
  
  
  drawSprites();
}