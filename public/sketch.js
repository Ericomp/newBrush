function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(51);
	ellipse(mouseX,mouseY,60);
}

function windowResized() { 
    resizeCanvas(windowWidth, windowHeight); 
} 
