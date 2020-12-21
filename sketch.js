var wall,thickness;
var bullet ,weight;



function setup() {
createCanvas(1600,400);

wall=createSprite(1200,200,thickness,height/2)
bullet=createSprite(50, 200, 50, 50)
speed=random(55,90) 
weight=random(400,1500)
thickness=random(20,85)


}

function draw() {
  background(0,0,0); 
  bullet. velocityX =speed
  
  if (wall.x-bullet.x<(bullet.width+wall.width)/2) {
    bullet.velocityx=0
    var deformation=0.5*weight*speed*speed/22509
    if (deformation>180) {
      bullet.shapeColor=color(200,0,0)
    }if (deformation <180 && deformation>100) {
      bullet.shapeColor=color(250,50,20)
    }if (deformation<100) {
      bullet.shapeColor=color(200,500,0)
    }

  }
  
  if (hascollided (bullet,wall)) {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness)
  if (damage>10) {
    wall.shapeColor=color(255,0,0)
  }
  if (damage<10) {
    wall.shapeColor=color(0,255,0)
  }
  }
  drawSprites();

  }

  function hascollided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if (bulletRightEdge>=wallLeftEdge) {
  return true
}
return false

  }
