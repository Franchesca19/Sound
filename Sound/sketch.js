function preload() {
 song = loadSound('assests/b.m4a');
 console.log ("loaded");
}

function setup() {
  createCanvas(800,600);
  song.amp (0.5);
  
  
}

function draw () {
  background (0);
}

function mousePressed (){
 if (song.isplaying()){
   song.stop();
 }else {
   song.play();
 
  }
}

