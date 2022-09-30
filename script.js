class player {
  constructor(x, y, w, h, c, r) {
    player.x = x;
    player.y = y;
    this.width = w;
    this.height = h;
    this.color = c;
    this.radius = r;
  }
  draw() {
    fill(this.color);
    rect(player.x, player.y, this.width, this.height, this.radius);
  }
}

class player2 {
  constructor(x, y, w, h, c, r) {
    player.x2 = x;
    player.y2 = y;
    this.width = w;
    this.height = h;
    this.color = c;
    this.radius = r;
  }
  draw() {
    fill(this.color);
    rect(player.x2, player.y2, this.width, this.height, this.radius);
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
    if (this.x < -10 || this.x > width) {
      this.vx = this.vx * -1;
    }
    if (this.y < -10 || this.y > height) {
      this.vy = this.vy * -1;
    }
  }
}

class brick {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

var Player1, Player2

function setup() {
  createCanvas(600, 400);
  Player1 = new player(250, 350, 100, 30, "lime", 10)
  Player2 = new player2(250, 350, 100, 30, "purple", 10)
  Ball = new ball(300, 200, 25, 25, 5, 5, "crimson")
}

function draw() {
  background("#48cfd9");
  Player1.draw();
  Player2.draw();
  Ball.draw();

  //speler 1
  if (keyIsDown(37)) {
    player.x = player.x - 5
  }

  if (keyIsDown(39)) {
    player.x = player.x + 5
  }
  
  //speler 2
  if (keyIsDown(65)) {
    player.x2 = player.x2 - 5
  }

 if (keyIsDown(68)) {
    player.x2 = player.x2 + 5
  }
}

// handige shortcuts!!!
// ctlr + / shorcut voor een comment
// ctlr + alt ingedrukt houden om meerdere dingen tegelijkertijd te kunnen editten
// ctlr + enter = een run shortcut
// ctrl + f om dingen in je code te zoeken
// ctrl + d is om alles wat hetzelfde is tegelijkertijd te kunnen veranderen
// ctlr + z = een undo shortcut