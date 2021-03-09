const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var polygonImg;

function preload(){
  polygonImg = loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
    world = engine.world;

    ground1 =  new Ground( 390, 300,230,10);
    ground2 =  new Ground( 710, 200,180,10);


    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);

    box8 = new Box1(330,235,30,40);
    box9 = new Box1(360,195,30,40);
    box10 = new Box1(390,155,30,40);
    box11 = new Box1(420,115,30,40);
    box12 = new Box1(450,85,30,40);
    
    box13 = new Box2(420,45,30,40);
    box14 = new Box2(390,45,30,40);
    box15 = new Box2(360,45,30,40);

    box16 = new Box3(390,5,30,40);

    box17 = new Box(770,175,30,40);
    box18 = new Box(740,175,30,40);
    box19 = new Box(710,175,30,40);
    box20 = new Box(680,175,30,40);
    box21 = new Box(650,175,30,40);

    box22 = new Box2(740,135,30,40);
    box23 = new Box2(710,135,30,40);
    box24 = new Box2(680,135,30,40);
    
    box25 = new Box1(710,105,30,40);

    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    slingshot = new Slingshot(this.ball,{x:50,y:200});

  
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground1.display();
  ground2.display();

  imageMode(CENTER);
  image(polygonImg,ball.position.x,ball.position.y,40,40);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  
  box13.display();
  box14.display();
  box15.display();

  box16.display();
  
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();

  box25.display();

  slingshot.display();
  



}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}