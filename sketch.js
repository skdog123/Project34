
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ninja1
var bg

function preload(){
  jump=loadAnimation("ninjaJump1.png","ninjaJump2.png","ninjaJump3.png","ninjaJump4.png")
  ninja_idle=loadAnimation("ninja1.png")
  //ninja_idle=loadImage("ninja1.png")
  bg.loadImage("bg.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight-4);
  jump.frameDelay = 19;

  engine = Engine.create();
  world = engine.world;
  ground= new Ground(width/2,height-5,width,10)
  ground2= new Ground(width/2-50,height/2-5,width-100,10)

  ninja=Bodies.rectangle(300,height-200,50,100);
  
  World.add(world,ninja)

  
  ninja1 = createSprite(ninja.position.x,ninja.position.y,50,100);
  ninja1.scale=0.7
  ninja1.addAnimation("idle",ninja_idle)
  ninja1.addAnimation("jump",jump)
  
  var render = Matter.Render.create({ element:document.body, engine:engine, options: { width:windowWidth, height:windowHeight, wireframes:false } }); Matter.Render.run(render);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show()
  ground2.show()
  drawSprites();
  ninja1.position.x=ninja.position.x
  ninja1.position.y=ninja.position.y

  if(keyDown("RIGHT_ARROW")){
    Body.applyForce(ninja,ninja.position,{x:0.007,y:0})
  }
  if(ninja1.y>height-70){
  if(keyDown("SPACE")){
    Body.applyForce(ninja,ninja.position,{x:0,y:-0.05})
    ninja1.changeAnimation("jump")
  }
 }
}

