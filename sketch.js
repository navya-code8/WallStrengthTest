var bullet, wall;

var speed,weight, thickness;




function setup() {
  createCanvas(800,400);
  
  speed = random(55,90)
  weight = random(400,1500)

  bullet = createSprite(50,200,80,50);
  bullet.velocityX = speed;

  wall = createSprite(730,200,thickness,height/2);

 

}

function draw() {
  background("black"); 

  var damage = (0.5*weight*speed*speed) / (thickness*thickness*thickness);

  console.log(damage);

  if (touching(wall,bullet)){

    bullet.velocityX = 0;
    bullet.x = 680;
    
    if (damage<10){
      wall.shapeColor = "green";
    }

    else{
      wall.shapeColor = "red";
    }
    
    
    
  
  }

  else{
    wall.shapeColor = "white";
  }
  

  drawSprites();
}

