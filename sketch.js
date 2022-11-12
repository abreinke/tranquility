
let x = 500;
function setup() {
  mySound = loadSound('assets/birds.mp3');
  createCanvas(500, 500);
  background(0, 0, 0);
  stroke(237,170,166);
  strokeWeight(25);
}

function draw(){
   line(mouseX, mouseY, 150, 150);
    }
   function mouseMoved(){
     if (mouseX > 250){
       stroke(4,196,187);
     }
   }
