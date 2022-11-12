
function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
}

function draw(){
  line(mouseX, mouseY, pmouseX, pmouseY);
  stroke(237,170,166);
  strokeWeight(25);
   }
   function mouseMoved(){
   if (mouseX > 250){
   stroke(4,196,187);
   }
}
