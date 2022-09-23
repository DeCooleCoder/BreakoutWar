class Ball{
    constructor(x,y,w,h,vx,vy,c){
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.vx = vx;
        this.vy = vy;
        this.color = c;
    }

    draw(){
        fill(this.color);
        ellipse(this.x, this.y, this.width, this.height);
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if(this.x < 0 || this.x > width){
            this.vx = this.vx * -1
        }
        if(this.y < 0 || this.y > height){
            this.vy = this.vy * -1
        }
    }
}

var Ball1;

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
  Ball1 = new Ball(70,190,30,30,5,5,"crimson");

  // for(i = 0; i < 30; i++){
  //   blocks.push(new Block());
  // }
}

function draw() {
    background('black');
    Ball1.draw();
    
    // blocks.forEach(block => {
    //  block.draw()
    // });  
}