var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("monkey.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,200)
  ghost.addImage("ghost-standing",ghostImg)
  ghost.scale=0.50
  climbersGroup=new Group()
  invisibleBlockGroup=new Group()

  
  
}

function draw() {
  background(200);
  if (gameState=="play"){

  
  drawSprites()
  if(tower.y > 400){
      tower.y = 300

      
    
  }
  if(keyDown("space")){
    ghost.velocityY=-3


  }
  if(keyDown("left")){
    ghost.x=ghost.x-2
  }
  ghost.velocityY=ghost.velocityY+0.8
  if(keyDown("right")){
    ghost.x=ghost.x+2
  }
  spawnDoors()
if( ghost.isTouching(climbersGroup)){
  ghost.velocityY=0

}
if (invisibleBlockGroup.isTouching (ghost)||ghost.y>600){
  ghost.destroy()
  gameState="end"
}

  }
  if (gameState=="end"){
    stroke("yellow")
    fill ("yellow")
    textSize(30)
    text("gameOver",230,250)
  }
}

function spawnDoors(){
if(frameCount%240===0){
  var door=createSprite(200,-50)
  var climer=createSprite(200,10)
  var invisibleBlock=createSprite(200,10)
  climer.addImage(climberImg)
  climer.velocityY=1
  invisibleBlock.width=climer.width
  invisibleBlock.height=2
  door.addImage(doorImg)
  door.velocityY=1
  door.x=Math.round(random(120,400))
  climer.x=door.x
  invisibleBlock.x=door.x
  invisibleBlock.velocityY=1
  invisibleBlock.debug=true
  climbersGroup.add(climer)
  ghost.depth=door.depth
  ghost.depth+=1
  invisibleBlockGroup.add(invisibleBlock)

  
}


}