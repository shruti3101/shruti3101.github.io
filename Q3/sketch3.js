function setup() {
  createCanvas(1500,500);
  background(0);
}

function draw(){

  var h=hour();
  var m=minute();
  var s=second();

  var heightvar=map(s,0,60,0,height)

  // noStroke();
  // fill('green');
  // ellipse(widthvar, height-100, 25, 100);
  // stroke(102,51,0);
  // line(widthvar,height-100,widthvar,height);

  stroke(255)
  line(20,heightvar,100,heightvar)

  if (s==59){
  background(0) }

}
