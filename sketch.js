var movingrect,fixedrect;
var ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(200, 200, 80, 30);
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";
  ob1=createSprite(100, 100, 50, 50);
  ob2=createSprite(200, 100, 50, 50);
  ob3=createSprite(300, 100, 50, 50);
  ob4=createSprite(400, 100, 50, 50);
ob1.shapeColor="green";
ob2.shapeColor="green";
ob3.shapeColor="green";
ob4.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

 if(isTouching(ob1,movingrect)){
   movingrect.shapeColor="blue";
   ob1.shapeColor="blue";
   
 }
 else{
  movingrect.shapeColor="green";
  ob1.shapeColor="green";
   
 }
  drawSprites();
}

