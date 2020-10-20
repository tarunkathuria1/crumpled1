var paper,ground,rect1,rect2,rect3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2

	}

	paper = Bodies.circle(100,100,20,options);
	World.add(world,paper);

    ground = new Ground(100,height,1500,20)

	rect1 =createSprite (550,630,20,100)
	isStatic:true

	rect2 = createSprite (750,630,20,100)
	isStatic:true

	rect3 = createSprite (650,670,200,20)
	isStatic:true


	paper.x=mouseX;
	paper.y=mouseY;
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipseMode(RADIUS);
  ellipse(paper.position.x,paper.position.y,20)

  
  ground.display();

  drawSprites();
 
}



