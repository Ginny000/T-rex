var trex, trex_running, edges;
var groundImage, ground, groundInvisible;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //criando o trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50

  //criar chão
 ground = createSprite(200, 180, 400, 20); 
 ground.addImage(groundImage)
  
 //criar chão invisivel
 groundInvisible = createSprite(200, 190, 400, 10)
 groundInvisible.visible = false

}


function draw(){
  //definir a cor do plano de fundo 
  background("white");
  
  //movimento d chão
  ground.velocityX = -2

//chão infinito
  if (ground.x < 0){
    ground.x = ground.width/2
  }

  //pular quando tecla de espaço for pressionada
  if(keyDown("space") && trex.y >= 130){
    trex.velocityY = -10;
  }
  
  //gravidade do t-rex
  trex.velocityY = trex.velocityY + 0.7;
  
 //impedir que o trex caia
  trex.collide(groundInvisible)
  drawSprites();
}