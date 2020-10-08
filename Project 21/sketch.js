// defining
var bullet,wall,thickness,bullet2,wall2,wall3,bullet3,wall4,bullet4;
var speed, weight;
var line1, line2, line3, line4;

function setup() {
  createCanvas(1600,400);
// creating sprites and lines
  speed=random(223,321);
  weight=random(30,52);
  thickness = random(22,83);

  wall=createSprite(1200,50,thickness,60);
  wall.shapeColor=color(80,80,80);

  bullet = createSprite(50, 50, 20, 20);
  bullet.velocityX = speed;
  bullet.shapeColor=color(255);

  bullet2 = createSprite(50, 150, 20, 20);
  bullet2.velocityX = speed;
  bullet2.shapeColor=color(255);

  wall2=createSprite(1200,150,thickness,60);
  wall2.shapeColor=color(80,80,80);

  wall3=createSprite(1200,250,thickness,60);
  wall3.shapeColor=color(80,80,80);

  bullet3 = createSprite(50, 250, 20, 20);
  bullet3.velocityX = speed;
  bullet3.shapeColor=color(255);

  wall4=createSprite(1200,350,thickness,60);
  wall4.shapeColor=color(80,80,80);

  bullet4 = createSprite(50, 350, 20, 20);
  bullet4.velocityX = speed;
  bullet4.shapeColor=color(255);

  // lines
  line1 = createSprite(0, 100, 3000, 10);
  line2 = createSprite(0, 200, 3000, 10);
  line3 = createSprite(0, 300, 3000, 10);
  line4 = createSprite(0, 400, 3000, 10);
}

function draw() {
  background(0);
  // saying isTouching walls the see how hard it hit it  
  var thick = thickness * thickness * thickness;
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / thick;
    colorwall(wall,deformation);
  }

  if(wall2.x-bullet2.x < (bullet2.width+wall2.width)/2)
  {
    bullet2.velocityX=0;
    var deformation=0.5 * weight * speed* speed/thick;
  
    colorwall(wall2,deformation);

  }

  if(wall3.x-bullet3.x < (bullet3.width+wall3.width)/2)
  {
    bullet3.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / thick;
    colorwall(wall3,deformation);
  }

  if(wall4.x-bullet4.x < (bullet4.width+wall4.width)/2)
  {
    bullet4.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / thick; 
    colorwall(wall4,deformation);
  }
  drawSprites();
}
// passing collorwall
function colorwall(wall, deformation1) {
  if (deformation1 > 10) {
    wall.shapeColor = "red";
  }
  else {
    wall.shapeColor = "green";
  }


}