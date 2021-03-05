var tom,catImg,catWalking,catSitting;
var gardenImg;
var jerry,mouseImg,mouseAni,mouseImg2;


function preload() {
 catImg = loadAnimation("images/cat1.png");
 catWalking = loadAnimation("images/cat2.png","images/cat3.png");
 catSitting = loadAnimation("images/cat4.png");
 gardenImg = loadImage ("images/garden.png");
 mouseImg = loadAnimation ("images/mouse1.png");
 mouseAni = loadAnimation("images/mouse2.png","images/mouse3.png");
 mouseImg2 = loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    
    tom = createSprite(870,600);
    tom.addAnimation("sleeping",catImg);
    tom.scale = 0.2;
    jerry = createSprite(200,600);
    jerry.addAnimation("jumping",mouseImg);
   jerry.scale = 0.15;
  
  
}

function draw() {

    background(gardenImg);
    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", catSitting);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", mouseImg2);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning",catWalking);
    tom.changeAnimation("tomRunning");
    
    jerry.addAnimation("jerryTeasing", mouseAni);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
}

}
