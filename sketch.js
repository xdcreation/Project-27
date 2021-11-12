
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob6,rope1,rope2,rope3,rope4,rope6,roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

    roof = new Roof(400,250,290,20);
	bob1 = new Bob(320,400,50);
	bob2 = new Bob(360,400,50);
	bob3 = new Bob(400,400,50);
	bob4 = new Bob(440,400,50);
	bob6 = new Bob(480,400,50);
	rope1 = new Rope(bob1.body,roof.body,-80,0)
	rope2 = new Rope(bob2.body,roof.body,-40,0)
	rope3 = new Rope(bob3.body,roof.body,0,0)
	rope4 = new Rope(bob4.body,roof.body,40,0)
	rope5 = new Rope(bob6.body,roof.body,80,0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob6.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope6.display();

 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:155})
	}
}

