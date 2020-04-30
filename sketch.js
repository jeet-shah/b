const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground1,cannon,slingshot,engine,world;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,790,20,800);
  ground1 = new Ground(600,500,20,100);
  cannon = new Cannon(100,700,20,20);
  slingshot = new SlingShot(cannon.body,{x:100, y:700});
  box = new Box(570,770,30,50);
  box1 = new Box(590,770,30,50);
  box2 = new Box(610,770,30,50);
  box3 = new Box(630,770,30,50);
  box4 = new Box(580,730,30,50);
  box5 = new Box(600,730,30,50);
  box6 = new Box(620,730,30,50);
  box8 = new Box(590,690,30,50);
  box9 = new Box(610,690,30,50);
  box10 = new Box(600,650,30,50);
  box11 = new Box(579,480,30,50);
  box12 = new Box(599,480,30,50);
  box13 = new Box(619,480,30,50);
  box14 = new Box(589,440,30,50);
  box15 = new Box(609,440,30,50);
  box16 = new Box(599,400,30,50)
}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display(); 
  ground1.display();
  cannon.display();
  slingshot.display();
  box.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
}
function mouseDragged(){
  Matter.Body.setPosition(cannon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}