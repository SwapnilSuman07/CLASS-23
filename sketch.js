const Engine = Matter.Engine; //namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,200,50,50);

  box2= new Box(240,100,50,80);

  ground= new Ground(200,370,400,20);
 
}

function draw() {
  background("green"); 
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
  
}

// Engine ---> Universe
// World  ---> Earth
// Bodies ---> Bodies on the earth
// Physics engine ---> Matter.js