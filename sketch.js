let x = 600;
function setup() {
  createCanvas(600, 600);
  background(0, 0, 0);
  stroke(237,170,166);
  strokeWeight(25);
}

function draw(){
line(mouseX, mouseY, 10, 10);
  }
   function mouseMoved(){
   if (mouseX > 200){
      stroke(255,220,94);
      }
   if (mouseX > 400){
     stroke(108,221,224);
      }
  }
}
