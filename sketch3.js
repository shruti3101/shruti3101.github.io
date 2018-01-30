function setup() {
  createCanvas(640, 480);
  background(0);
}

function draw(){

  var h=hour();
  var m=minute();
  var s=second();

  var heightvar=map(s,0,60,0,height)

  stroke(255)
  line(20,heightvar,100,heightvar)

  if (s==59){
  background(0) }

}
