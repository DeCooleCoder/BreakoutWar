//Variablen!!
var Player1;
var Ball;
var bricks = [];

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
  }

  collision(){
      if((Ball.x + 25 > this.x && Ball.x < this.x + this.width) && (Ball.y + 25 > this.y && Ball.y < this.y + this.height)){
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

  draw(){
    fill(this.color)
    rect(this.x, this.y, 70, 20, 5)
  }

  hit(){
    if(Ball.x + 25 > brick.x && Ball.x < brick.x + 70 && Ball.y + 25 > brick.y && Ball.y < brick.y + 20){
        Ball.vy = Ball.vy * -1;
        }
    }
}

//Functions!!
function setup() {
  createCanvas(600, 500);
  Player1 = new player(250, 400, 100, 30, "lime", 10);
  Ball = new ball(300, 200, 25, 25, 5, 5, "crimson");

  bricks.push(new brick(130, 50, "green"));
  bricks.push(new brick(200, 50, "green"));
  bricks.push(new brick(270, 50, "green"));
  bricks.push(new brick(340, 50, "green"));
  bricks.push(new brick(410, 50, "green"));
}

function draw() {
  background("#48cfd9");
  Player1.draw();
  Player1.collision();
  Ball.draw();

  bricks.forEach(brick => {
    brick.draw();
    brick.hit();
  });
  

  //speler 1
  if (keyIsDown(37)) {
    Player1.x = Player1.x - 5
  }

  if (keyIsDown(39)) {
    Player1.x = Player1.x + 5
  }

  //Speler collision zodat hij niet door de muur heen gaat
  if (Player1.x < 0){
    Player1.x = 0;
  }
  if (Player1.x > 500){
    Player1.x = 500;
  }
}


// handige shortcuts!!!
// ctlr + / shorcut voor een comment
// ctlr + alt ingedrukt houden om meerdere dingen tegelijkertijd te kunnen editten
// ctlr + enter = een run shortcut
// ctrl + f om dingen in je code te zoeken
// ctrl + d is om alles wat hetzelfde is tegelijkertijd te kunnen veranderen
// ctlr + z = een undo shortcut