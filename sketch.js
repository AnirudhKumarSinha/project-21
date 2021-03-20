var bullet,wall;
var speed,weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);
  //giving random values
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  //creating sptites;
  bullet=createSprite(50,200,40,10)
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="80,80,80"
}

function draw() {
  background(220);
  //calculating deformation of the car 
 
  
  //changing the colour after colliding;
  if(isTouching(bullet,wall))
  {
      bullet.velocityX=0
      damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
      if(damage<10)
      {
        wall.shapeColor="green";
      
        
      }

      if(damage>10)
      {
        wall.shapeColor="red"
      
        
      }
      
      
      //deformation 
      console.log(damage);
    }
  
    
  drawSprites();
}


