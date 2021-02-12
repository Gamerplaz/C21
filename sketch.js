
var canvas;
var music;
var COLOR1;
var COLOR2;
var COLOR3;
var COLOR4;
var Box ;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    COLOR1 = createSprite(695,590,200,20);
    COLOR1.shapeColor = rgb(0, 142, 250);

    COLOR2 = createSprite(490,590,200,20);
    COLOR2.shapeColor = rgb(2, 237, 108);

    COLOR3 = createSprite(285,590,200,20);
    COLOR3.shapeColor = rgb(255, 251, 0);

    COLOR4 = createSprite(80,590,200,20);
    COLOR4.shapeColor = rgb(255, 3, 3);

    Box = createSprite(random(20,750),200,30,30);
    Box.shapeColor = "white";
    Box.velocityY = 3 ;
    Box.velocityX = random(2,1) ;



}

function draw() {
    background(rgb(0,0,0));

    edge = createEdgeSprites();
    Box.bounceOff(edge);

    if (Box.isTouching(COLOR1) && Box.bounceOff(COLOR1)) {
        Box.shapeColor = rgb(0, 142, 250) ;
        if (!music.play()) {
            music.play();
        }
        console.log("SUCESS!")
    }

    if (Box.isTouching(COLOR2) && Box.bounceOff(COLOR2)) {
        Box.shapeColor = rgb(2, 237, 108) ;
        if (!music.play()) {
            music.play();
        }
        
        console.log("SUCESS!")
    }

    if (Box.isTouching(COLOR3)) {
        Box.shapeColor = rgb(255, 251, 0) ;
        Box.velocityX = 0;
        Box.velocityY = 0;
        music.stop();
        
    }

    if (Box.isTouching(COLOR4) && Box.bounceOff(COLOR4)) {
        Box.shapeColor = rgb(255, 3, 3) ;
        if (!music.play()) {
            music.play();
        }
        console.log("SUCESS!")
        
    }
    drawSprites();    //add condition to check if box touching surface and make it box
}
