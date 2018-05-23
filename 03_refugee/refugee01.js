var mapimg;

var clat = 38.669117;
var clon = 34.553633;

var ww = 500;
var hh = 1000;

var zoom = 6;

var speed=5;
var x=0;

var position_x=[];
var position_y=[];
var angle_point=[];

var number;
var table;



function preload(){

  table = loadTable('syrian_refugee_agg.csv','csv','header');
}

// function preload() {
//   // The clon and clat in this url are edited to be in the correct order.
//   mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
//     clon + ',' + clat + ',' + zoom + '/' +
//     ww + 'x' + hh +
//     '?access_token=pk.eyJ1Ijoic3M1MTI3IiwiYSI6ImNqZTd4eGZxbDA2dmkyd29hNXhsem5qYngifQ.Jw4LB8mB9AYH5HtG_-Iq5g');
//  //http://api.mapbox.com/v4/mapbox.pencil.html?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NDg1bDA1cjYzM280NHJ5NzlvNDMifQ.d6e-nNyBDtmQCVwVNivz7A#3/-0.18/-0.18
// }

//pk.eyJ1Ijoic3M1MTI3IiwiYSI6ImNqZTd4eGZxbDA2dmkyd29hNXhsem5qYngifQ.Jw4LB8mB9AYH5HtG_-Iq5g

// function mercX(lon) {
//   lon = radians(lon);
//   var a = (256 / PI) * pow(2, zoom);
//   var b = lon + PI;
//   return a * b;
// }
//
// function mercY(lat) {
//   lat = radians(lat);
//   var a = (256 / PI) * pow(2, zoom);
//   var b = tan(PI / 4 + lat / 2);
//   var c = PI - log(b);
//   return a * c;
// }

function gotdata(data){
  console.log(data);
}
function gotdata2(data){
  console.log(data);
}

var slider;
var year=[];
var count=[];

var input;

function setup() {
  createCanvas(2000,1000);
  year=table.getColumn('year');
  count=table.getColumn('individuals');

  // button=createButton("YEAR");

  // slider=createSlider(2010,2020,2012);
  input= createInput("YEAR to visualize", 520,height-(height/3));



  mapimg=loadImage('https://api.mapbox.com/styles/v1/mapbox/light-v9/static/' + clat + ',' + clon + ',' + 4 + '/' + 500 + 'x' + 1000 +
    '?access_token=pk.eyJ1Ijoic3M1MTI3IiwiYSI6ImNqZTd4eGZxbDA2dmkyd29hNXhsem5qYngifQ.Jw4LB8mB9AYH5HtG_-Iq5g',gotdata);
  syriaimage=loadImage('syria.jpg');

  // imageMode(CENTER);
  frameRate(5);


}

var syriaimage;


function draw()
{




  var p= input.value();
  number= findcount(p);


  createpositions();

  findcount(p);

  image(mapimg,0,0);

  fill('#8ea6b4');
  textSize(35);
  textStyle(NORMAL);
  text("VISUALIZING THE NUMBER OF REFUGEES", 520, 40)
  text("MIGRATING FROM SYRIA BY YEAR", 520,90)

  textSize(15);
  textStyle(NORMAL);
  text("Each dot represents 500 migrants.", 520,150)

  textSize(24);
  textStyle(NORMAL);
  text("Only 12 Syrian Refugees were accepted by the U.S. Moreover,  ", 520, 190)
  text("the current government has failed to provide the pledged resources,", 520, 225)
  text("putting 2.5 Million refugees at risk.", 520, 260)

  image(syriaimage, 520, height/3);

  fill('#404b69');
  noStroke();
  textSize(16);
  textStyle(BOLD);
  text("This sketch visualizes the number of refugees reported to ", 20,40)
  text("UNHCR per year from 2012-2018. Enter a year in the input box",20,60);
  text("below.", 20,80)

  stroke('#404b69');
  line (520+750,18,520+750,910);
  fill('#404b69')
  ellipse(520+750,910,5,5);



  stroke('#404b69');
  line (20,910,440,910);
  fill('#404b69')
  ellipse(440,910,5,5);


  fill('#404b69');
  noStroke();
  textSize(14);
  textStyle(NORMAL);
  text("In the year "+p+" the number of recorded refugees was "+(number*500)+".", 20, 950)

  text("** A Visualization by Shruti Shubham", 520, 910)

  var h = map(number,0,50000,0,400);

  noStroke();
  rect(20,900,h,20);

  translate(250,500)

  //drawing the big circle



  var d= 450;
  // stroke(0);
  fill(5,20);
  ellipse(0, 0, d, d);




  appendingpositions();
  rendercircles(p);

  // x=x+speed;
  // if(x>width){
  // speed=-5;
  //  }
}



function findcount(p){

  var divisor=500;

  if (p==2012){
  int = count[0]/divisor;
} else if (p==2013) {
  int = count[1]/divisor;
}else if (p==2014) {
  int = count[2]/divisor;
}else if (p==2015) {
    int = count[3]/divisor;
}else if (p==2016) {
      int = count[4]/divisor;
}else if (p==2017) {
      int = count[5]/divisor;
}else if (p==2018) {
      int = count[6]/divisor;
}

p=round(int);
return p;

}



function createpositions(){

  for (var k=0;k<number;k++)

  {
  var position=random(225);
  var a=random(TWO_PI);

  position_x[k]=position*cos(a);
  position_y[k]=position*sin(a);
  angle_point[k]=a;

  }

}

function appendingpositions(){

  for (var k=0;k<number;k++){

    position_x[k]=position_x[k]+(speed*cos(angle_point[k]));
    position_y[k]=position_y[k]+(speed*sin(angle_point[k]));

 }
}


function rendercircles(p){

  for (var j=0;j<number;j++)
  {

    if (p==2012){
    color = '#942525';
  } else if (p==2013) {
    color = '#a92b2b';
  }else if (p==2014) {
    color = '#942525';
  }else if (p==2015) {
    color = '#a92b2b' ;
  }else if (p==2016) {
    color = '#942525';
  }else if (p==2017) {
    color = '#a92b2b';
  }else if (p==2018) {
    color ='#942525';
  }
  // console.log(p);

  // var h=map(p,0,)
  //
  // rect(20,20,)

  fill(color);
  noStroke();
  ellipse(position_x[j],position_y[j],2,2);

  }
}
