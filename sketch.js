var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,590,180,20);
    surface1.shapeColor="red";
    surface2=createSprite(300,590,180,20);
    surface2.shapeColor="yellow";
    surface3=createSprite(500,590,180,20);
    surface3.shapeColor="green";
    surface4=createSprite(700,590,180,20);
    surface4.shapeColor="purple";
    //create box sprite and give velocity
    box=createSprite(random(20,750),300,20,20);
    box.shapeColor="white";
    box.velocityX=5;
    box.velocityY=-5;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);
    
    isTouching();
    drawSprites();
}
function isTouching(){
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        
        music.stop();
        box.velocityX=0;
        box.velocityY=0
        box.shapeColor="red";
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        
        music.stop();
        box.shapeColor="yellow";
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        
        music.play();
        box.shapeColor="green"
        
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        
        music.play();
        box.shapeColor="purple"
    }
}
