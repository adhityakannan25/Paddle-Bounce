var ball,img,paddle, ballImg, paddleImg;

function preload(){

  ballImg=loadImage("ball.png")
  paddleImg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
   ball = createSprite(200,200,30,30);
  paddle= createSprite(380,200,20,100);

  ball.addImage(ballImg)
  paddle.addImage(paddleImg)
  
  ball.velocityX=9
}
function draw() {
  background(205,153,0);
  
   edges=createEdgeSprites()

  ball.bounceOff(paddle, Adhitya)
 
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.velocityY=-3
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=3;
  }
  drawSprites();
  
}
function Adhitya(){
  ball.velocityY=random(-6, 6)
}
 