const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World= Matter.World;


var myengine, ground, myworld,ball;
var box1, box2;

function setup() 
{
  createCanvas(600,600);

  myengine=Engine.create();
  myworld=myengine.world;

  
 

  ground=new Ground(300,590,600,20);
  box1= new Box(200,300,50,50);
  box2=new Box(220,200,50,100)

 
}

function draw() 
{
  background(0); 

  Engine.update(myengine);

  ground.display();
   
  box1.display();

  box2.display();
 
}
