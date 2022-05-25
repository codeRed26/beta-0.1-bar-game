var player,customer,bar,bg,bar1
var barImg,playerImg,customerImg1,customerImg2,barrelImg,barrel,barrel2,barrel3,barglass,barglassImg,emptybarglass,emptybarglassImg
var score=0;
var enemyGroup, enemyGroup2,barglassGroup,emptybarglassGroup

function preload() {
  bg=loadImage("background.png")
  barImg=loadImage("bar.png")
  playerImg=loadImage("cc1.png")
 customerImg1=loadImage("cc2.png")
 customerImg2=loadImage("c3.png")
 barrelImg=loadImage("barrel.png")
 barglassImg=loadImage("barglass(1).png")
 emptybarglassImg=loadImage("emptybglass.png")
}

function setup() {
  createCanvas(1000,500);
  bar=createSprite(400,450,870,34)
  bar.shapeColor="brown"

  bar1=createSprite(400,300,870,34)
  bar1.shapeColor="brown"

  bar1=createSprite(400,150,870,34)
  bar1.shapeColor="brown"
  player=createSprite(950,250,20,20)
  player.addImage("plr",playerImg)
  player.scale=2.0
  player.debug=true
  player.setCollider("rectangle",0,0,2,3)
  enemyGroup= new Group()
  enemyGroup2= new Group()
  barrel=createSprite(975,100,50,50)
  barrel.addImage("barrl",barrelImg)
  barrel.scale=0.5

  barrel2=createSprite(975,250,50,50)
  barrel2.addImage("barrl",barrelImg)
  barrel2.scale=0.5

  barrel3=createSprite(975,450,50,50)
  barrel3.addImage("barrl",barrelImg)
  barrel3.scale=0.5
  barglassGroup= new Group()
  emptybarglassGroup= new Group()

}
function draw() {
  background(bg);
  movement()
 spawncustomer()
 
  /*if(enemyGroup.collide(barglassGroup)||enemyGroup2.collide(barglassGroup)){
spawnemptybarglass()

  }*/
  if(player.isTouching(barrel)){
    spawninglass()


  }
  drawSprites()
}
function movement(){
  if(keyIsDown(LEFT_ARROW)){
 player.x=player.x-10

  }

  if(keyIsDown(RIGHT_ARROW)){
    player.x=player.x+10
   
     }

     if(keyIsDown(UP_ARROW)){
      player.y=player.y-10
     
       }

       if(keyIsDown(DOWN_ARROW)){
        player.y=player.y+10
       
         }

          }
function spawncustomer(){
if(frameCount%80===0){

var enemy = createSprite(Math.random(20, 80),100,50,50)

enemy.addImage(customerImg1)
enemy.velocityX=2
enemy.scale=0.28
enemy.Lifetime=400
enemyGroup.add(enemy)

var enemy2 = createSprite(Math.random(20, 80),400,50,50)

enemy2.addImage(customerImg2)
enemy2.velocityX=2
enemy2.scale=0.28
enemy2.Lifetime=400
enemyGroup2.add(enemy2)


}
}
function spawninglass(){
  
  var glass = createSprite(player.x,70,30,30)
  
  glass.addImage(barglassImg)
  glass.scale=0.2
glass.debug=true
glass.setCollider("circle",0,0,0.1)
  
  barglassGroup.add(glass)

}

function spawnemptybarglass(){
  var emptybarglass = createSprite(900,340)
  emptybarglass.addImage(emptybarglassImg)
  glass.scale=2
  
  emptybarglassGroup.add(emptybarglass)




}
