
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var dustbin1, dustbin2,dustbin3;
 
 

function setup() {
	canvas = createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

     paper= new Paper(100,200,45) 
  
	 ground=new Ground(300,390,1900,10)

	 dustbin1=new Dustbin(900,height-45,10,60)//side one
	 dustbin2=new Dustbin(1020,height-45,10,60)//side two
	 dustbin3=new Dustbin(960,height-20,120,10)//base



	Engine.run(engine);
  
}


function draw() {
  
	Engine.update(engine);

  background("black");
  
  paper.display()
  ground.display()
dustbin1.display()
dustbin2.display()
dustbin3.display()
 
}



function keyPressed()
{
if(keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,
	{x:100,y:-100})
}
}

