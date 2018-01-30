function setup() {
  createCanvas(640, 480);

}

function draw(){

  background(255);

  var h=hour();
  var m=minute();
  var s=second();

  var angle1=map(s,0,60,0,2*PI)
  var angle2=map(m,0,60,0,2*PI)
  var angle3=map(h,0,60,0,2*PI)

  translate(width/2,height/2)
  fill(0)
  ellipse(0,0,10,10)
  rotate(angle1)
  stroke(10)
  line(0,0,50,0)

  rotate(angle2)
  stroke(25)
  line(0,0,35,0)

  rotate(angle3)
  stroke(40)
  line(0,0,20,0)


}
