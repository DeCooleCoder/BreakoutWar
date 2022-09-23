let colorlist = ['white', 'black']

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(125);
}

function draw() {
  noStroke()
  fill(random(colorlist));
  ellipse(mouseX, mouseY, 50, 50);
}