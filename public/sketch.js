var posX, posY;
var amt;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  colorMode(HSB, 100);
}

function draw() {

  push();

  posX = mouseX;
  posY = mouseY;
  amt = random(10, 100);

  var nPosX = posX + random(-amt, amt);
  var nPosY = posY + random(-amt, amt);

  //strokeWeight(random(0.1,2));
  noStroke();
  fill(0, 0, 100, 3);
  //ellipse(posX, posY, nPosX, nPosY);
  rect(mouseX, mouseY, 50 + random(-amt, amt), 100 + random(-amt, amt));
  rotate(30 * PI / 180);

  posX = nPosX;
  posY = nPosY;

  pop();
}

function mousePressed() {

  fill(random(255), 10, 80);
  rect(0, 0, windowWidth, windowHeight);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}