function setup() {
  createCanvas(640, 480);
  background(0);
}

function draw(){

  var h=hour();
  var m=minute();
  var s=second();

  var heightvar=map(s,0,60,0,height)
  var widthvar=map(s,0,60,0,width)

  fill('red');

// making the shape here
  beginShape();
  vertex(0,0);
  vertex(0,heightvar);
  vertex(widthvar,0);
  endShape(CLOSE);

  if (s==59){
  background(0) }

}
