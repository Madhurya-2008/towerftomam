const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;
var magicGround1, magicGround2

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var player;

var ball;
var img;

function preload(){
  img = loadImage("hexagon (1).png");

}

function setup() {
  createCanvas(1500,600);
  engine = Engine.create();
    world = engine.world;

  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);
  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);
  block10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);
  block13 = new Block(600,140,30,40);
  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);
  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);
  block22 = new Block(900,110,30,40);

  ground1 = new Ground(600,300,200,30);
  magicGround1 = new Ground(600,321,200,10)
  ground2 = new Ground(900,300,200,30);
  magicGround2 = new Ground(900,321,200,10)
  ground3 = new Ground(750, 600, 1500, 10)

  player = new Player(50,200,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling = new Chain(this.ball,{x:150, y:160});

}

function draw() {
  background("lightblue");
  Engine.update(engine);

  fill("lightgreen");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightblue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  
  fill("cyan");
  block10.display();
  block11.display();
  block12.display();

  fill("pink")
  block13.display();

  fill("lightgrey")
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("green");
  block19.display();
  block20.display();
  block21.display();

  fill("red");
  block22.display();

  ground1.display();
  ground2.display();
  ground3.display();

  magicGround1.display();
  magicGround2.display();

  imageMode(CENTER);
  image(img,ball.position.x,ball.position.y,40,40);

  sling.display();

  

  fill("black");
  textFont("Arial");
  textSize(20);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",200,50)
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
    sling.slings.bodyA=player.body;
   //sling.attach(player.body);
	}

  
}
