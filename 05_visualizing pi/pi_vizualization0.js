
var button;
var state=0;


var pi;
var pos;
var dia;
var str;
var pi_split=[];
var state=0;

var count=['0','0','0','0','0','0','0','0','0','0'];
var index=0;
var nextpos;
var d=600;



function setup() {

  createCanvas(1000, 1000);
  background('#DDE0AB');

  button = createButton('next');
  button.mousePressed(toggleVisualization);



}

function draw() {
    background(255);

    stroke(255);
    noFill();

    translate(width/2, height/2);
    ellipse(0,0,d,d);

    if (state == 0) {
      visualize1();
    } else if (state == 1) {
      loadStrings("pi-1million.txt",splitstring);
    } else if (state == 2) {
      makecircles2();
    }
  }


  function toggleVisualization() {
    state = state + 1;
    if (state == 3) {
      state = 0;
    }
  }

  function splitstring(result){

    fill('red');
    stroke(10);
    text('this is canvas 2',20,20);


    pi=String(result);
    pi_split = split(pi, '');
    console.log(pi_split.length);

  }

  function visualize1(){

   fill('red');
   stroke(10);
   textSize(20);
   text('I am visualizing PI',20,20);

  }



  function makecircles2(){
    noStroke();

    // fill('#DDE0AB');
    // ellipse(0,0,d,d);
    fill(random(255),random(255),random(255));
    //'#97CBA9

    var a1=map(pos,0,9,0,TWO_PI);
    var a2=map(nextpos,0,9,0,TWO_PI);

    var position=d/2;
    var position_text=position+10;

    ellipse(position*cos(a1),position*sin(a1),dia*2,dia*2);
    console.log('creating ellipse at '+pos+'vertex at'+300*cos(a1)+' '+300*sin(a1));

    stroke(255,50);
    line(position*cos(a1),position*sin(a1),position*cos(a2),position*sin(a2));

    // if((pos!='0')||(pos!='undefined')||(nextpos!='0')||(nextpos!='undefined')){
    // fill('#97CBA9');
    // text(pos,position_text*cos(a1),position_text*sin(a1));
    // text(nextpos,position_text*cos(a2),position_text*sin(a2));
  }

  function makecircles(){

    console.log('I am in Makecircles');


    var i=0;

    while (i<10000){
      // background('#DDE0AB');
      // push();

      if (pi_split.length>50000){
        d==700;
      }
      var index=pi_split[i]
      count[index]++;




      pos=index;
      dia2=count[index];
      dia=map(dia2,0,100359,0,d)
      nextpos=pi_split[i+1];

      console.log(index);
      console.log(count);
      console.log(count[index]);


      // translate(width/2,height/2);
      makecircles2(pos,dia,nextpos);

      // pop();

      i++
      }

  }
