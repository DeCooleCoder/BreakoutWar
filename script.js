//Variablen!!
var player1;
var ball;
var score = 0;
let bricks = [];
let gameState = 0
let startbg;
let Gameoverbg;
let startmusic;
let brickhit;
let youwin;

//Classes!!!
class Player{
  constructor(x, y, w, h, c, r){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = c;
    this.radius = r;
  }

  draw(){
    fill(this.color);
    rect(this.x, this.y, this.width, this.height, this.radius);
  }

  collision(){
    if ((ball.x + 15 > this.x && ball.x < this.x + this.width) && (ball.y + 15 > this.y && ball.y < this.y + this.height)) {
      ball.vy = ball.vy * -1;
      let paddleMiddle = this.x + (this.width / 2);
      if(ball.x < paddleMiddle){
        console.log("naar links");
        if(ball.vx > 0){
          ball.vx *= -1;
        }
      }
      //   else if(ball.x = paddleMiddle){
      // console.log("middle")
      //     if(ball.vx = 0){
      //     ball.vx = 0.1;
      //     ball.vy *= -1;
      //   }
      // }
      else{
        console.log("naar rechts");
            if(ball.vx < 0){
          ball.vx *= -1;
        }
      }
    }
  }
}

class Ball{
  constructor(x, y, w, h, vx, vy, c){
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

    //velocity code
    if (this.x < 10 || this.x > width){
      this.vx = this.vx * -1;
    }
    if (this.y < 10 || this.y > height){
      this.vy = this.vy * -1;
    }
  }
}

class brick{
  constructor(x, y, c){
    this.x = x;
    this.y = y;
    this.color = c;
  }

  draw(){
    fill(this.color)
    rect(this.x, this.y, 70, 20, 5)
  }

  hit(){
    if (ball.x + 25 > this.x && ball.x < this.x + 70 && ball.y + 25 > this.y && ball.y < this.y + 20) {
      ball.vy = ball.vy * -1;
      let idx = bricks.indexOf(this);
      bricks.splice(idx,1)
      brickhit.play();
      score += 1
    }
  }
}

function setup(){
  createCanvas(600, 500);
  player1 = new Player(250, 470, 100, 10, "white", 5);
  ball = new Ball(300, 200, 20, 20, 5, 5, "white");
  startbg = loadImage('Backgrounds/startbg.gif');
  startmusic = loadSound('Sounds/level-start.mp3');
  brickhit = loadSound('Sounds/jump-3.mp3')
  Gameoverbg =  loadImage('Backgrounds/Gameoverbg.gif')
  youwin = loadImage('Backgrounds/youwin.gif')
  //loopje voor de bricks!
   for(let r = 0; r< 3;r++){
      for(let i = 1; i< 7;i++){
        bricks.push(new brick((i * 65) + (i * 10), (r + 1) * 30, "#04de37"));
      }
   }
}

function startGame(){
  background(startbg);
  textAlign(CENTER);
  textSize(20);
  text("PRESS ENTER \n TO START GAME", width/2,height/2);
  fill("white")
}

function playGame(){
  background("#48cfd9");
  player1.draw();
  player1.collision();
  ball.draw();

  bricks.forEach(brick => {
    brick.draw();
    brick.hit();
  });
  textSize(20);
  fill("white")
  text("Score: " + score, 50, 25)
    
    
  if(bricks.length == 0){
    gameState = 2
  }
    
  if (keyIsDown(37)){
    player1.x = player1.x - 10
  }

  if (keyIsDown(39)){
    player1.x = player1.x + 10
  }

  //Speler collision zodat hij niet door de muur heen gaat
  if (player1.x < 0){
    player1.x = 0;
  }
  if (player1.x > 500){
    player1.x = 500;
  }

    //zorgt voor Game Over scherm
  if (ball.y > 499){
    gameState = 3
    if (keyIsDown(13)){
        gameState = 1
    }
  }
}

function finishGame(){
  if(bricks.length == 0){
     background("#1511d9");
     textAlign(CENTER);
     textSize(20);
     background(youwin)
     text("AMAZING JOB!!!\nPRESS ENTER TO PLAY AGAIN", width/2,height/2)
     fill("white")
  if (keyIsDown(13)){
          setup()
          gameState = 1
        }
  }
}

function keyPressed(){
if(keyIsDown(13)) {
    gameState = 1
  }
if(keyIsDown(8)){
  setup()
    gameState = 0
}
}

function GameOver(){
  bricks.splice(0, bricks.length)
    background(255,0,0);
    textAlign(CENTER);
    textSize(20);
    background(Gameoverbg)
    text("\nPRESS ENTER TO PLAY AGAIN", width/2,height/2.55);
    fill("white")
    if (keyIsDown(13)){
        setup()
        gameState = 1
    }
}


function draw() {
  if(gameState == 0){
    startGame();
  } 
  else if(gameState == 1){
    playGame();
  }
  else if(gameState == 2){
    finishGame();
  }
  else if(gameState == 3){
   GameOver();
  }
}


// handige shortcuts!!!
// ctlr + / shorcut voor een comment
// ctlr + alt ingedrukt houden om meerdere dingen tegelijkertijd te kunnen editten
// ctlr + enter = een run shortcut
// ctrl + f om dingen in je code te zoeken
// ctrl + d is om alles wat hetzelfde is tegelijkertijd te kunnen veranderen
// ctlr + z = een undo shortcut