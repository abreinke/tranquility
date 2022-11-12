
function setup() {
  createCanvas(500, 500);
  background(0, 0, 0);
  stroke(237,170,166);
  strokeWeight(25);
}

function draw(){
  if (mousePressed)(){
  line(mouseX, mouseY, pmouseX, pmouseY);
  }
   function mouseMoved(){
   if (mouseX > 250){
   stroke(4,196,187);
  }
}
