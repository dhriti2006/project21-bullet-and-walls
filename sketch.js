var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(233,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor=color("white");

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color("white");

  textSize(20);
  fill("white");

}

function draw() {
  background(0);

  if(keyDown("space")){
    bullet.x=50;
    bullet.y=200;

    speed=random(223,321)
    weight=random(30,52)
    thickness=random(22,83)

    bullet.velocityX=speed;
  }

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 *weight*speed*speed/(thickness*thickness*thickness);
  
 if(damage>10){
   wall.shapeColor=color("white");
 }

 if(damage<10){
   wall.shapeColor=color("yellow");
 }

 text("DAMAGE; " + Math.round(damage),500,50)
 text("SPEED: " + Math.round(speed),500,70)
 text("WEIGHT: "+ Math.round(speed),500,90)
 text("THICKNESS: "+ Math.round(speed),500,110)


}

drawSprites();

}


function hasCollided(object1,object2){
  if(object2.x-object1.x < object1.width/2+object2.width/2){
    return true;
  }
  else
  {
    return false;
  }
}



