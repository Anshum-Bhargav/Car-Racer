var car,carImg;
var barrier,barrierImg;


function preload(){
    carImg=loadImage("car.png");
    barrierImg=loadImage("barrier.png")
}

function setup(){
    createCanvas(windowWidth-10,windowHeight-20);

    car = createSprite(windowWidth/2,windowHeight/2,20,20);
    car.addImage(carImg);
    car.scale=0.25;

}

function draw(){
    background("white");

    if(keyDown(RIGHT_ARROW)){
        car.x=car.x+10;
    }
    if(keyDown(LEFT_ARROW)){
        car.x=car.x-10;
    }
    if(keyDown(UP_ARROW)){
        car.y=car.y-10;
    }
    if(keyDown(DOWN_ARROW)){
        car.y=car.y+10;
    }
    
    spawnObs();
    drawSprites();
}

function spawnObs(){
    if(frameCount%100===0){
        var barrier=createSprite(300,-50,20,20);
        barrier.x= random(200,windowWidth-200);
        barrier.addImage(barrierImg);
        barrier.scale=0.4;
        barrier.velocityY=5;
    }
}