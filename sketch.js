let myFont;
let cp=document.getElementById("colorpicker");

function preload(){
  myFont=loadFont("fonts/amakan-Strips.otf")

}
function setup() {
  var c=createCanvas(400, 400);
  c.parent("canvasWrapper")
}

function draw() {
  background(cp.value);
  textAlign(CENTER);
  textSize(25);
  textFont(myFont);
  fill(255);
  text("feliz navidad", width/2, height/2);
}
