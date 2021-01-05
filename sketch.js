const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ground;
var boy,BImage;
var tree;
var stone;
var mango1,mango2,mango3;

function preload(){
  //BImage = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,600,800,20);

	boy = new Boy(200,530,100,50);

	stone = new Stone(150,500,2,2);

  tree = new Tree(600,360,20,20);
  
  mango1 = new Mango(600,400,20,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(83,192,203));
  
  ground.display();
  boy.display();
  stone.display();
  tree.display();
  mango1.display();

  drawSprites();

 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,);
}


function mouseReleased(){
  slingshot.fly();
}

