function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw(){
  if (mouseIsPressed){
    fill(191,167,111);
  }
  }
   function mouseMoved(){
   if (mouseY > 200){
      fill(255,220,94);
  }
   if (mouseY > 400){
     fill(108,221,224);
  }
  ellipse(mouseX, mouseY, 10, 10);
}
