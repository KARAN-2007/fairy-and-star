const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world,star,starI,starBody;
var star_option;
var bg,bgI;
var gameSound;
var fairyI,fairy;
function preload()
{
  fairyI=loadAnimation("fairy1.png","fairy2.png");
  bgI=loadImage("starnight.png");
  starI=loadImage("star.png");
  gameSound=loadSound("JoyMusic.mp3");
   //preload the images here
}

function setup() {
  
 
  createCanvas(windowWidth,521);
    engine=Engine.create();
    world=engine.world;
    
     star_option={
      isStatic:true

    }



    starBody=Bodies.rectangle(500,100,50,50,star_option);
    
    World.add(world,starBody);
    console.log(star);
    
    star=createSprite(500,100);
    star.addImage(starI);
    star.scale=0.5;

    bg=createSprite(width/2,height/2,50,50);
    bg.addImage(bgI);
    bg.scale=0.5;
    
    fairy=createSprite(40,height-80,50,50);
    fairy.addAnimation("run",fairyI);
    fairy.scale=0.125;
    //console.log(fairy.y-100);
}


function draw() {
  Engine.update(engine);
  background("black");
//star.x=starBody.position.x;
  //star.y=starBody.position.y;
   if(keyDown("LEFT")&& fairy.x<starBody.position.x-80){
     fairy.x=fairy.x-5;
   }
   if(keyDown("RIGHT")&& fairy.x<starBody.position.x-90){
    fairy.x=fairy.x+5;
  }
   if(fairy.x>starBody.position.x-100&& keyDown("down")){
     Matter.Body.setStatic(starBody,false);
   }
   if(starBody.position.y>401){
    Matter.Body.setStatic(starBody,true);
   
  
    
  }
  drawSprites();
  //rectMode(CENTER);
  
 //rect(star.position.x,star.position.y,50,50)
}
