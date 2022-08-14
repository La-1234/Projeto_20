
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var block1
var block2
var block3
var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var plane_options={
		isStatic : true
	}

	var block1_options={
		restitution: 0.75,
		friction: 0.05,
		frictionAir: 0
	}

	var block2_options={
		restitution: 1,
		friction: 0.01,
		frictionAir: 0.2
	}

	var block3_options={
		restitution: 0.5,
		friction: 0.1,
		frictionAir: 0.02
	}
	//Crie os Corpos Aqui.
	ground = Bodies.rectangle(200,690,1300,10, plane_options);
	World.add(world,ground)
	block1 = Bodies.circle(220,10,40, block1_options);
	World.add(world,block1)
	block2 = Bodies.rectangle(110,50,50,50, block2_options);
	World.add(world,block2)
	block3 = Bodies.rectangle(350,50,30,30, block3_options);
	World.add(world,block3)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  rect(ground.position.x, ground.position.y,1300,10)
	ellipse(block1.position.x,block1.position.y,40,40)
	rect(block2.position.x, block2.position.y,50,50)
	rect(block3.position.x, block3.position.y,30,30)
}



