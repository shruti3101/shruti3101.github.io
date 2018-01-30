function setup() {
  createCanvas(640, 480);

}

function draw(){
  background(0);

  var h=hour();
  var m=minute();
  var s=second();

  var heightvar=map(s,0,60,0,height)
  fill(255);
  text('The time right now is:\n' + h + ':'+ m +':'+ s,5, 50);

  ellipse(width/2, height/2, s*10,s*10);

  push();
  scale(s,s);
  rect(10,10,10,10);
  pop();

}
