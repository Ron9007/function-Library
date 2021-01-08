var fixedRect, movingRect;
var obj1,obj2;
var square
function setup() {
  createCanvas(800,600);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(200, 200, 70, 100);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="blue";
  fixedRect.debug=true;
  movingRect.debug=true;
  square=createSprite(100, 50, 50, 50);
square.shapeColor="yellow";

  obj1=createSprite(600, 400, 50, 50);
  obj2=createSprite(200, 400, 50, 50);
  obj1.velocityX=-1;
  obj2.velocityX=1;
  obj1.shapeColor="green";
  obj2.shapeColor="blue";
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY; 
 if(isTouching(movingRect,square)){
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
 }else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="blue";
  }
  bounceOff(obj1,obj2);
 
  drawSprites();
}

