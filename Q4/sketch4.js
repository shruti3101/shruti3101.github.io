function setup() {
  createCanvas(640, 480);

}

function draw(){

  background(255);

  var h=hour();
  var m=minute();
  var s=second();

  text('The time right now is:\n' + h + ':'+ m +':'+ s,5, 50);

  var angle1=map(s,0,60,0,2*PI)
  var angle2=map(m,0,60,0,2*PI)
  var angle3=map(h/2,0,12,0,2*PI)

  translate(width/2,height/2)
  fill(0)
  ellipse(0,0,10,10)

  push();
  rotate(angle1-(PI/2))
  strokeWeight(0.5)
  line(0,0,100,0)
  pop();

  push();
  rotate(angle2-(PI/2))
  strokeWeight(1)
  line(0,0,80,0)
  pop();

  push();
  rotate(angle3-(PI/2))
  strokeWeight(2)
  line(0,0,50,0)
  pop();


}
