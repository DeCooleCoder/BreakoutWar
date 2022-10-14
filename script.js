//Variablen!!
var Player1;
var Ball;
let bricks = [];
let gameState = 0
let startbg;
let startmusic;
let brickhit;

//Classes!!!
class player{
  constructor(x, y, w, h, c, r){
    player.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = c;
    this.radius = r;
  }

  draw(){
    fill(this.color);
    rect(player.x, this.y, this.width, this.height, this.radius);
  }

  collision(){
    if ((Ball.x + 15 > player.x && Ball.x < player.x + this.width) && (ball.y + 15 > this.y && ball.y < this.y + this.height)) {
      // Ball.vx = ((player.x + 150 - Ball.x)/8)
      Ball.vy = Ball.vy * -1;
    }
  }
}

class ball{
  constructor(x, y, w, h, vx, vy, c){
    this.x = x;
    ball.y = y;
    this.width = w;
    this.height = h;
    this.vx = vx;
    this.vy = vy;
    this.color = c;
  }

  draw(){
    fill(this.color);
    ellipse(this.x, ball.y, this.width, this.height);
    this.x = this.x + this.vx;
    ball.y = ball.y + this.vy;

    //velocity code
    if (this.x < 10 || this.x > width){
      this.vx = this.vx * -1;
    }
    if (ball.y < 10 || ball.y > height){
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
    if (Ball.x + 25 > this.x && Ball.x < this.x + 70 && ball.y + 25 > this.y && ball.y < this.y + 20) {
      Ball.vy = Ball.vy * -1;
      let idx = bricks.indexOf(this);
      bricks.splice(idx,1)
        brickhit.play();
    }
  }
}

//Functions!!
// function preload() {
//   fontSans = loadFont('assets/open-sans.regular.ttf');
// }

function setup(){
  createCanvas(600, 500);
  Player1 = new player(250, 470, 100, 10, "white", 5);
  Ball = new ball(300, 200, 20, 20, 5, 5, "white");
  startbg = loadImage('Backgrounds/startbg.gif');
  startmusic = loadSound('Sounds/level-start.mp3');
  brickhit = loadSound('Sounds/jump-3.mp3')
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
    
  if (keyIsDown(37)){
    player.x = player.x - 10
  }

  if (keyIsDown(39)){
    player.x = player.x + 10
  }

  //Speler collision zodat hij niet door de muur heen gaat
  if (player.x < 0){
    player.x = 0;
  }
  if (player.x > 500){
    player.x = 500;
  }

    //zorgt voor Game Over scherm (gebruik splice om uit array weg te halen misschien zodat alle blokjes verdwijnen.)
  if (ball.y > 499){
    gameState = 3
    if (keyIsDown(13)){
        gameState = 1
    }
  }
}

//Speelt nu niet opnieuw omdat er geen bricks meer zijn om weer mee te spelen het aantal bricks blijft 0 dus moet een manier verzinnen om die bricks te resetten en moet een manier bedenken om weer de player te kunnen bewegen!! (daarom zie je ook die flits als je op ENTER drukt)
function finishGame(){
  if(bricks.length == 0){
     background("#1511d9");
     textAlign(CENTER);
     textSize(20);
     text("AMAZING JOB!!!\nPRESS ENTER TO PLAY AGAIN", width/2,height/2)
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
    text("GAME OVER\nPRESS ENTER TO PLAY AGAIN", width/2,height/2);
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