const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var rocket;
var engine, world;
var bg;
var position;
var rock;
var obstacle;
var obstacle_image;
var planet, planet_image;
var planetGroup, obstaclesGroup;
var ground;

var score;




function preload(){
 
  obstacle_image = loadImage("./images/meteroid.png");
  planet_image = loadImage("./images/planet.png");
  groundImage = loadImage("./images/background.png");
 
}

function setup() {
 engine = Engine.create();
 world = engine.world;
 createCanvas(600,600);
 rocket = new Rocket(displayWidth/2,300);
 Matter.Body.setPosition (rocket.body , {x:300, y :550});
 var planetGroup = new Group();
 var obstaclesGroup = new Group();
 //score = 0;
}

function draw() {
   
  background(225);
  //var gameState = PLAY;
  var ground = createSprite(300,300,600,600);
  ground.addImage("ground", groundImage);
  ground.y = ground.height/2;
  ground.velocityY = 5;
  
  //if(gameState===PLAY){
    
    if (rocket !== undefined){
     rocket.move();
     rocket.display();
     }
     
     //if (ground.x < 0){
      //ground.x = ground.width/2;
    //}
    
     
     
 // if(isTouching()){
    //gameState = END;
  //}
  //if(isTouching(rocket, planetGroup)){
   // planetGroup.remove();
    //score = score + 200;
//}

  //}

  /*else if(gameState===END){
    obstaclesGroup.setVelocityYEach(0);
    planetGroup.setVelocityYEach(0);

    obstaclesGroup.setLifetimeEach(-1);
    planetGroup.setLifetimeEach(-1);
    //score = 0;
  }
  */

 
createObstacles();
createPlanets();

Engine.update(engine);
drawSprites();
}



function isTouching(rocket, obstaclesGroup) {
  if (rocket.x - obstaclesGroup.x < obstaclesGroup.width/2 + rocket.width/2
    && obstaclesGroup.x - rocket.x < obstaclesGroup.width/2 + rocket.width/2
    && rocket.y - obstaclesGroup.y < obstaclesGroup.height/2 + rocket.height/2
    && obstaclesGroup.y - rocket.y < obstaclesGroup.height/2 + rocket.height/2) 
    {
  
  gameState = END;
}
  else {
    return false;
         }
}

function createObstacles(){
  if(frameCount % 50 === 0){
    var obstacle = createSprite(random(10,600),random(10,300),50,50);
    obstacle.velocityY = 5;
    obstacle.addImage("obstacle",obstacle_image);
    obstacle.scale = 0.1;
    obstaclesGroup.add(obstacle);
  }
}

function createPlanets(){
  if(frameCount%400===0){
    var planet = createSprite(random(10,600),random(10,300),50,50);
    planet.velocityY = 5;
    planet.addImage("planet",planet_image);
    planet.scale = 0.1;
    planetGroup.add(planet);

  }
}
