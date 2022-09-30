//Classes!!!
class player {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = c;
  }
  draw() {
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
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

    if (this.x < -10 || this.x > width) {
      this.vx = this.vx * -1;
    }
    if (this.y < -10 || this.y > height) {
      this.vy = this.vy * -1;
    }
  }
}

class Platform {
  constructor(x, y, c) {
    Platform.x = x;
    Platform.y = y;
    Platform.color = c;
  }

  draw() {
    fill(Platform.color);
    rect(Platform.x, Platform.y, 80, 20);
  }

  hit() {

  }
}

class brick{
  constructor( x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
}

//Variables!!!
var Ball1;
var Platform1;

//Functies!!!
function setup() {
  createCanvas(windowWidth, windowHeight);
  Ball1 = new Ball(windowWidth / 2, windowHeight / 2, 30, 30, 5, 5, "crimson");
  Platform1 = new Platform(windowWidth / 2, windowHeight / 2, "white");
  // for(getal = 0; getal < 30; getal += 1){
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

  if (keyIsDown(37)) {
    Platform.x = Platform.x - 5
  }

  if (keyIsDown(39)) {
    Platform.x = Platform.x + 5
  }
}