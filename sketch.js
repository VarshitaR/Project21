var canvas;
var music;
var s1;
var s2;
var s3;
var s4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    s1 = createSprite(100,580,200,20);
    s1.shapeColor = "blue";

    s2 = createSprite(300,580,200,20);
    s2.shapeColor = "green";

    s3 = createSprite(500,580,200,20);
    s3.shapeColor = "yellow";

    s4 = createSprite(700,580,200,20);
    s4.shapeColor = "red";

    ball = createSprite(random(20,750),50,40,40);
    ball.shapeColor = "black";
    ball.setVelocity(5,9);


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    edges = createEdgeSprites();
    ball.bounceOff(edges);

    if(s1.isTouching(ball)&&ball.bounceOff(s1)){

      ball.shapeColor = "blue"; 

      music.play();

    }

    
    if(s2.isTouching(ball)&&ball.bounceOff(s2)){

        ball.shapeColor = "green"; 

        ball.setVelocity(0,0);
        music.stop();
  
      }

   
      if(s3.isTouching(ball)&&ball.bounceOff(s3)){

        ball.shapeColor = "yellow"; 
  
      }   

      
    if(s4.isTouching(ball)&&ball.bounceOff(s4)){

        ball.shapeColor = "red"; 
  
      }
   drawSprites();
    //add condition to check if box touching surface and make it box
}
