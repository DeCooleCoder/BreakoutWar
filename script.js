//Variablen!!
var Player1;
var Ball;
var bricks = [];
let gameState = 0

//Classes!!!
class player {
  constructor(x, y, w, h, c, r) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = c;
    this.radius = r;
  }

  draw() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, this.radius);
      
    //speler 1 movement
    if (keyIsDown(37)) {
      this.x = this.x - 10
    }

    if (keyIsDown(39)) {
      this.x = this.x + 10
    }

    //Speler collision zodat hij niet door de muur heen gaat
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x > 500) {
     this.x = 500;
    }
  }

  collision() {
    if ((Ball.x + 15 > this.x && Ball.x < this.x + this.width) && (Ball.y + 15 > this.y && Ball.y < this.y + this.height)) {
      Ball.vy = Ball.vy * -1;
    }
  }
}

class ball {
  constructor(x, y, w, h, vx, vy, c) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.color = c;
  }

  draw() {
    fill(this.color);
    ellipse(this.x, this.y, this.width, this.height);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    //velocity code
    if (this.x < 10 || this.x > width) {
      this.vx = this.vx * -1;
    }
    if (this.y < 10 || this.y > height) {
      this.vy = this.vy * -1;
    }
  }
}

class brick {
  constructor(x, y, c) {
    this.x = x;
    this.y = y;
    this.color = c;
  }

  draw() {
    fill(this.color)
    rect(this.x, this.y, 70, 20, 5)
  }

  hit() {
    if (Ball.x + 25 > this.x && Ball.x < this.x + 70 && Ball.y + 25 > this.y && Ball.y < this.y + 20) {
      Ball.vy = Ball.vy * -1;
      let idx = bricks.indexOf(this);
      bricks.splice(idx,1)
    }
  }
}

//Functions!!
function setup() {
  createCanvas(600, 500);
  Player1 = new player(250, 470, 100, 10, "white", 5);
  Ball = new ball(300, 200, 20, 20, 5, 5, "white");

   for(let r = 0; r< 3;r++){
      for(let i = 1; i< 7;i++){
        bricks.push(new brick((i * 65) + (i * 10), (r + 1) * 30, "#04de37"));
      }
   }
}

function draw() {
  if(gameState == 0){
    startGame();
  } else if(gameState == 1){
    playGame();
  }else if(gameState == 2){
    finishGame();
 }
}

function startGame(){
  background(0,255,0);
  textAlign(CENTER);
  textSize(20);
  text("PRESS ENTER TO START GAME", width/2,height/2);

  // put your code here
}

function playGame(){
  {
  background("#48cfd9");
  Player1.draw();
  Player1.collision();
  Ball.draw();

  bricks.forEach(brick => {
    brick.draw();
    brick.hit();
  });

  if(bricks.length == 0){
    gameState = 2
  }
 }
}

function finishGame(){
  if(bricks.length == 0){
     background("lime");
     textAlign(CENTER);
     textSize(20);
     text("AMAZING JOB!!!\nPRESS ENTER TO PLAY AGAIN", width/2,height/2)}
   else {background(255,0,0);
     textAlign(CENTER);
      textSize(20);
      text("GAME OVER\nPRESS ENTER TO PLAY AGAIN", width/2,height/2);}
  }


function keyPressed(){
  if (keyCode === ENTER){
    gameState = 1
  }
}
// handige shortcuts!!!
// ctlr + / shorcut voor een comment
// ctlr + alt ingedrukt houden om meerdere dingen tegelijkertijd te kunnen editten
// ctlr + enter = een run shortcut
// ctrl + f om dingen in je code te zoeken
// ctrl + d is om alles wat hetzelfde is tegelijkertijd te kunnen veranderen
// ctlr + z = een undo shortcut