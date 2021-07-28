const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(2000,displayHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(750,450,250,15);
  stand2 = new Stand(1500,300,200,15);
 
  //level one
  block1 = new Block(660,425,30,40);
  block2 = new Block(690,425,30,40);
  block3 = new Block(720,425,30,40);
  block4 = new Block(750,425,30,40);
  block5 = new Block(780,425,30,40);
  block6 = new Block(810,425,30,40);
  block7 = new Block(840,425,30,40);
  //level two
  block8 = new Block(690,385,30,40);
  block9 = new Block(720,385,30,40);
  block10 = new Block(750,385,30,40);
  block11 = new Block(780,385,30,40);
  block12 = new Block(810,385,30,40);
  //level three
  block13 = new Block(720,345,30,40);
  block14 = new Block(750,345,30,40);
  block15 = new Block(780,345,30,40);
  //top
  block16 = new Block(750,305,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(1440,275,30,40);
  blocks2 = new Block(1470,275,30,40);
  blocks3 = new Block(1500,275,30,40);
  blocks4 = new Block(1530,275,30,40);
  blocks5 = new Block(1560,275,30,40);
  //level two
  blocks6 = new Block(1470,235,30,40);
  blocks7 = new Block(1500,235,30,40);
  blocks8 = new Block(1530,235,30,40);
  //top
  blocks9 = new Block(1500,195,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,300,20);
  World.add(world,polygon);
  polygon.x = camera.x;
  
  slingShot = new Slingshot(this.polygon,{x:250,y:250});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",800,30);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",750 ,650);
  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,50,50);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
//write code for extra chance of the player
  if(keyCode === 32) {
    slingShot.attach(this.polygon);
  }
}
