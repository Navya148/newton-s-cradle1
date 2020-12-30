
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var roof, bob1, bob2, bob3
var bob4, bob5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,600,20);
	bob1 = new Bob(150,300,80)
	bob2 = new Bob(170,300,80)
	bob3 = new Bob(190,300,80)
	bob4 = new Bob(210,300,80)
	bob5 = new Bob(230,300,80)
	rope1 = new Rope(bob1.body, roof.body, -bobDiameter*2, 0)
	rope2 = new Rope(bob2.body, roof.body, -bobDiameter*2, 0)
	rope3 = new Rope(bob3.body, roof.body, -bobDiameter*2, 0)
	rope4 = new Rope(bob4.body, roof.body, -bobDiameter*2, 0)
	rope5 = new Rope(bob5.body, roof.body, -bobDiameter*2, 0)


	Engine.run(engine);
  
}


function draw() {
  background(180);
  Engine.update(engine);

  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  drawSprites();
 
}



