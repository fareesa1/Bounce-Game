const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground
var ball


function preload()
{
  groundImg = loadImage("https://cdnb.artstation.com/p/assets/images/images/011/210/507/large/kim-shein-wall-sprite.jpg")
  ballImg = loadImage("https://openclipart.org/image/2000px/327602")
  fireImg = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mario_Fireball.png/1280px-Mario_Fireball.png")
}

function setup() {
  createCanvas(700,700);
  frameRate(80)
eng = Engine.create()
world = eng.world

ball = Matter.Bodies.circle(50,600,30,{restitution:0.7})
World.add(world,ball)


ground = new Ground(0,680,1200,400)
ground2=new Ground(1300,600,1200,400)
ground3 = new Ground(-1300,600,1200,400)

ground4 = new Ground(0,0,1200,400)
ground5=new Ground(1300,0,1200,400)
ground6 = new Ground(-1300,0,1200,400)

fireball = createSprite(0,400)
fireball.addImage(fireImg)
fireball.scale=0.1
fireball.velocityX=-7
}

function draw() 
{
  background("wheat");
  camera.x = ball.position.x
  camera.y = ball.position.y
  Engine.update(eng)
  ellipseMode(CENTER)
  rectMode(CENTER)
  imageMode(CENTER)
  image(ballImg,ball.position.x,ball.position.y,60,60)

  drawSprites();
console.log(ball.position.y)
  if (keyDown("UP_ARROW")){
    Body.applyForce(ball,ball.position,{x:0,y:-0.005})
  }
  ground.show()
  ground2.show()
  ground3.show()
  ground4.show()
  ground5.show()
  ground6.show()
  if (keyDown("RIGHT_ARROW")){
    Body.applyForce(ball,ball.position,{x:0.005,y:0})
  }
  if (keyDown("LEFT_ARROW")){
    Body.applyForce(ball,ball.position,{x:-0.005,y:0})
  }

  if(keyDown("space")){
    camera.zoom = camera.zoom - 0.1; 
  }

  if(keyDown("space")){
    camera.zoom = camera.zoom - 0.1; 
  }

  if(keyDown("e")){
    camera.zoom = camera.zoom + 0.1; 
  }

  if (ball.position.y>460){
    window.location.reload()
  }

// create fireball as obstacle on ground 1


if(fireball.x>600){
  fireball.velocityX = -7
}

if(fireball.x<0){
  fireball.velocityX = 7
}

}

// function keyPressed(){

// }
