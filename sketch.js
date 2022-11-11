let mySound;
let oceanSound;

function preload (){
  soundFormats('mp3');
  mySound = loadSound ('assets/birds.mp3');
  oceanSound = loadSound('assets/ocean.mp3');
}

let x = 500;
function setup() { 
  createCanvas(500, 500);
  background(0, 0, 0);
  stroke(237,170,166);
  strokeWeight(25);
  soundVolume = 0.5;
  mySound.setVolume(soundVolume);
  oceanSound.setVolume(soundVolume); 
}

function draw(){
  if (mouseIsPressed){
   line(mouseX, mouseY, pmouseX, pmouseY);
    mySound.play();
   }
    if (x > 250){
    x-=2;
  }
  else if (x < 250){
    x+=2;
  }
  x+=floor(movedX / 5);
  background(0, 0, 0);
  
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