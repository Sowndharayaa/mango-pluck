
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;
var boy;
var mango1,mango2,mango3,mango4,mango5,mango6;
var mango7,mango8,mango9,mango10,mango11;
var rock,tree;
var ground
function preload()
{
	boy = loadImage ("boy.png");
	tree = loadImage ("tree.png")
}

function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	
	mango1 = new Mango(1200,200,40);
	mango2 = new Mango(1000,275,40);
	mango3 = new Mango (1200,300,40);
	mango4 = new Mango (1400,290,40);
	mango5 = new Mango (1350,250,40);
	mango6 = new Mango (1100,300,40);
	mango7 = new Mango (1400,300,40);

	rock = new Stone (135,515,40);
  rope = new Rope (rock.body,{x:120,y:515});
  ground = new Ground()

  var render = Render.create({
    element:document.body,
    engine:engine,
    options:{
      width:1500,
      height:700
    }
  })
  Render.run(render)

	//Create the Bodies Here.



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  image(boy ,100,450,200,300);
  image (tree,900,100,600,600)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  ground.display();
  
  mango7.display();
  rock.display();
  rope.display();
  
  drawSprites();
  detectollision(rock,mango1);
  detectollision(rock,mango2);
  detectollision(rock,mango3);
  detectollision(rock,mango4);
  detectollision(rock,mango5);
  detectollision(rock,mango6);
  detectollision(rock,mango7);
 
}
function mouseDragged(){
    Matter.Body.setPosition (rock.body,{x:mouseX,y:mouseY})
}
function mouseReleased (){
    rope.fly()
}
function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(rock.body, {x:120, y:515}) 
	  rope.attach(rock.body);
	}
  }
  function detectollision(lrock,lmango){
    mangoBodyPosition=lmango.body.position
    rockBodyPosition=lrock.body.position
    
    var distance=dist(rockBodyPosition.x, rockBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
      if(distance<=lmango.r+lrock.r)
      {

        Matter.Body.setStatic(lmango.body,false);
      }
  
    }




