class Ball{
    constructor(x,y,w,h,vx,vy,c){
        Ball.x = x;
        Ball.y = y;
        Ball.width = w;
        Ball.height = h;
        Ball.vx = vx;
        Ball.vy = vy;
        Ball.color = c;
    }

    draw(){
        fill(Ball.color);
        ellipse(Ball.x, Ball.y, Ball.width, Ball.height);
        Ball.x = Ball.x + Ball.vx;
        Ball.y = Ball.y + Ball.vy;

        if(Ball.x < 0 || Ball.x > width){
            Ball.vx = Ball.vx * -1
        }
        if(Ball.y < 0 || Ball.y > height){
            Ball.vy = Ball.vy * -1
        }
    }
}

var Ball1;

class Platform{
    constructor(x,y,vx,c){
        Platform.x = x;
        Platform.y = y;
        Platform.vx = vx;
        Platform.color = c;
    }

    draw(){
        fill(Platform.color);
        rect(Platform.x, Platform.y, 80, 20);
        Platform.x = Platform.x + Platform.vx
    }
}

var Platform1;

function keyPressed() {
  switch (keyCode) {
    case 37:
    case 65:
      Platform.vx = -5;
      break;
    case 39:
    case 68:
      Platform.vx = 5;
      break;
  }
}

function keyReleased() {
  switch (keyCode) {
    case 37:
    case 65:
      Platform.vx = 0;
      break;
    case 39:
    case 68:
      Platform.vx = 0;
      break;
  }
}


// class Block{
//     constructor(){
//         this.xpos = random(windowWidth);
//         this.ypos = random(windowHeight);
//     }
    
//     draw(){
//         rect(this.xpos, this.ypos, 60, 30)
//         fill('crimson')
//     }
// }

// var blocks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  Ball1 = new Ball(windowWidth/2,windowHeight/2,30,30,5,5,"crimson");
  Platform1 = new Platform(windowWidth/2,windowHeight/2, 0,"white");
  // for(i = 0; i < 30; i++){
  //   blocks.push(new Block());
  // }
}

function draw() {
    background('black');
    Platform1.draw();
    Ball1.draw();

    
    
    // blocks.forEach(block => {
    //  block.draw()
    // });  
}