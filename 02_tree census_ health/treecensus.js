
var table=[];
var status=[];
var health=[];
var name=[];
var latitude=[];
var longitude=[];
var lat=[];
var lon=[];
var s=[];

function preload() {

  table=loadTable('tree_census.csv','csv', 'header');
}


function loadData(){

  status= table.getColumn('status');
  health= table.getColumn('health');

  latitude= table.getColumn('latitude');
  longitude= table.getColumn('longitude');

  for (var b=0; b< latitude.length; b++)
  {
    var temp=table.getRow(b);
    s[b]=temp.arr;

  }

}

function setup(){
  // noLoop();
  loadData();
  createCanvas(1000,1000);

}

var x;
var y;
var string;
var sub;

function draw() {

  background(255);
  mapcoordinates();

  textSize(25);
  fill('#2c365d');
  textStyle(BOLD);
  text('Visualizing the trees with POOR or FAIR health in NYC',20,25);

  noStroke();
  fill('#fdb87d');
  ellipse(20,60,10,10);
  fill('#f2f2f0');
  ellipse(20,80,10,10);

  textSize(12);
  fill('#2c365d');
  textStyle(NORMAL);
  text("Poor Trees",50,60);
  text("Fair Trees",50,80);

  textSize(15);
  fill('#2c365d');
  textStyle(NORMAL);
  text("As reported by New York Times, 10 lawsuits stemming from deaths or injuries caused",20, 110);
  text("by falling trees were reported in 2012. To better understand the location of trees which",20, 130);
  text("do not have good health as per Tree Census 2015, hover over the individual points.",20,150);

  textSize(15);
  fill('#2c365d');
  textStyle(BOLD);
  text('Status, '+'Health, '+ 'Common name of the Tree, '+ 'Coordinates', 20,height-80);

  textSize(10);
  fill('#2c365d');
  textStyle(ITALIC);
  text('A Visualization by Shruti Shubham', 20,height-20);


  for (var i=0; i< latitude.length; i++){

    var pos_y=map(latitude[i],40.70178954,40.87305363,height-100,20);
    var pos_x=map(longitude[i],-73.91120169,-74.01836049,width,20);

    var d=dist(pos_x,pos_y,mouseX,mouseY)
    if (d<2){

      x=mouseX;
      y=mouseY;
      string=s[i];


      hover(x,y,string);
   }
}

}



function hover(x,y,string){
push();
textSize(15);
fill('#2c365d');
ellipse(x, y,10,10);
textStyle(NORMAL);
text(string,20,height-60);
pop();
}


function mapcoordinates(){

  for (var i=0;i<latitude.length;i++){
    var pos_y=map(latitude[i],40.70178954,40.87305363,height-100,20);
    var pos_x=map(longitude[i],-73.91120169,-74.01836049,width,20);

    var color;

    if ((health[i]=='Poor')||(health[i]=='poor')){
      color='#fdb87d';
    }
    else {
      color='#f2f2f0';
    }


    noStroke();
    fill(color);
    ellipse(pos_x,pos_y,5,5);


}

}
