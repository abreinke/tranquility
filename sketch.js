
let x = 500;
function setup() {
  mySound = loadSound('assets/birds.mp3');
  createCanvas(500, 500);
  background(0, 0, 0);
  stroke(237,170,166);
  strokeWeight(25);
  mouseMoved();
}

function draw(){
  if (mouseIsPressed){
   line(mouseX, mouseY, pmouseX, pmouseY);
   mySound.play();
   }
   return false;
}

function keyTyped (){
  if (key === 'r') {
    stroke(237,170,166);
  }
  else if (key === 'y') {
    stroke(251,238,110);
  }
  else if (key === 'b'){
    stroke(4,196,187);
  }
}
