var Anukaran, Anukaran2;
var car, wall;

function setup() {
  createCanvas(800,400);
  Anukaran = createSprite(200, 200, 50, 50);
  Anukaran.shapeColor = "blue"
  Anukaran2 = createSprite(400, 200, 50, 50);
  Anukaran2.shapeColor = "blue"
  car = createSprite(200, 100, 50, 50);
  car.shapeColor = "green";
  car.velocityX = 4;
  wall = createSprite(500, 100, 50, 100);
  wall.shapeColor = "brown";
}

function draw() {
  background(255,255,255); 
  Anukaran.x = mouseX;
   Anukaran.y = mouseY;
   isTouching();
   bounceOff();
  drawSprites();
}
function isTouching(){
  if(Anukaran.x - Anukaran2.x < Anukaran.width/2 + Anukaran2.width/2 && Anukaran2.x - Anukaran.x < Anukaran.width/2 + Anukaran2.width/2 && Anukaran.y - Anukaran2.y < Anukaran.height/2 + Anukaran2.height/2 && Anukaran2.y - Anukaran.y < Anukaran.height/2 + Anukaran2.height/2){
    Anukaran.shapeColor = "red";
    Anukaran2.shapeColor = "red"; 
  }
  else{
   Anukaran.shapeColor = "blue";
   Anukaran2.shapeColor = "blue"; 
  }
}
function bounceOff(){
  if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < car.width/2 + wall.width/2){
  car.velocityX = (-1)* car.velocityX;

  }
  else if(car.y - wall.y < car.height/2 + wall.height/2 && wall.y - car.y < car.height/2 + wall.height/2){
    car.velocityY = (-1)* car.velocityY;

  }
}
