
var pi;
var int=[];
var button;
var state=0;
var index=0;
var digits=[];

function preload(){
  pi=loadStrings("hello.txt");

  digits = pi.split("");
  console.log(digits);

}

function setup() {

  button = createButton('next');
  button.mousePressed(toggleVisualization);
  createCanvas(600,600);


}

function draw() {
    background(255);



    if (state == 0) {
      visualize1();
    } else if (state == 1) {
      visualize2();
    } else if (state == 2) {
      visualize3();
    }
  }


  function toggleVisualization() {
    state = state + 1;
    if (state == 3) {
      state = 0;
    }
  }

  function visualize1(){

   // beginShape();
   //
   // for(var index=0;index<str.length;index++){
   //   var r = map(pinumber[index], 0, 9, 0, width);
   //   vertex(height/2, r);
   // }
   // endShape();
   fill('red');
   stroke(10);
   text('this is canvas 1',300,300);

  }

  function visualize2(){
    fill('red');
    stroke(10);
    text('this is canvas 2',300,300);

  }

  function visualize3(){
    fill('red');
    stroke(10);
    text('this is canvas 3',300,300);
  }
