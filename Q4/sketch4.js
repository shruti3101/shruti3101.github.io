function setup() {
  createCanvas(640, 480);

}

function draw(){

  background(255);

  var h=hour();
  var m=minute();
  var s=second();

  var angle=map(s,0,60,0,2*PI)

  translate(width/2,height/2)
  fill(0)
  ellipse(0,0,10,10)
  rotate(angle)
  stroke(10)
  line(0,0,50,0)


}
