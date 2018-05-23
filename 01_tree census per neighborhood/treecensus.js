
var table;

function preload() {

  batterypark=loadTable('batterypark2_CT.csv','csv', 'header');
  harlem=loadTable('eastharlemsouth_CT.csv','csv', 'header');
  midtown=loadTable('midtown_CT.csv','csv', 'header');
  soho=loadTable('soho_CT.csv','csv', 'header');

}

function setup(){
  createCanvas(2000,3200);
  frameRate(30);
  background(255);

  var lat=batterypark.getColumn('latitude');

}

function draw() {
    mapcoordinates1();
    mapcoordinates2();
    mapcoordinates3();
    mapcoordinates4();
  }

function mapcoordinates1(){
  var id= batterypark.getColumn('tree_id');
  var latitude= batterypark.getColumn('latitude');
  var longitude= batterypark.getColumn('longitude');

  if ((mouseX>750)&&(mouseY<30)){


  var len=id.length;
  var starty=90;
  makerec(len,starty);


  }

  textSize(30);
  noStroke();
  fill(128,155,154)
  text("BATTERY PARK CITY", 750,30);

  textSize(20);
  text("Median Rent per Month= $5,575. It is 52% higher than then Manhattan average.", 750, 60)


  textSize(15);
  noStroke();
  fill(128,155,154)
  textStyle(ITALIC)
  text("(Hover over the neighborhood name)", 1050,30)

  for (var i=0;i<id.length;i++){
    var pos_y=map(latitude[i],40.70178954,40.71884523,520,20);
    var pos_x=map(longitude[i],-74.00024469,-74.01836049,720,20);

    strokeWeight(1);
    stroke(128,155,154,30);

    noFill();
    ellipse(pos_x,pos_y,2,2);
  }
}

function makerec(len,starty){
  push();
  var startx=750;

  for (var h=0;h<len;h++){

    rect(startx,starty,10,10);
    startx= startx+15;

    if (startx>width-10){
    startx=750;
    starty=starty+15;
    }

  }
  pop();
}





function mapcoordinates2(){
  var id= soho.getColumn('tree_id');
  var latitude= soho.getColumn('latitude');
  var longitude= soho.getColumn('longitude');

  if ((mouseX>750)&&(mouseY>(830-15))&&(mouseY<(830+15))){



  var len=id.length;
  var starty=890;
  makerec(len,starty);

  }

  textSize(30);
  noStroke();
  fill(128,155,154)
  text("SOHO-TRIBECA", 750,30+800)

  textSize(20);
  text("Median Rent per Month= $5,287. It is 12% lower than the Manhattan average.", 750,860);


  for (var i=0;i<id.length;i++){
    var pos_y=map(latitude[i],40.70991459,40.72896938,520+800,20+800);
    var pos_x=map(longitude[i],-73.9929042,-74.01372291,720,20);

    strokeWeight(1);
    stroke(128,155,154,30);

    noFill();
    ellipse(pos_x,pos_y,2,2);
  }
}

function mapcoordinates3(){



  var id= midtown.getColumn('tree_id');
  var latitude= midtown.getColumn('latitude');
  var longitude= midtown.getColumn('longitude');

  if ((mouseX>750)&&(mouseY>(1630-15))&&(mouseY<(1630+15))){

  var len=id.length;
  var starty=1690;
  makerec(len,starty);


  }

  textSize(30);
  noStroke();
  fill(128,155,154)
  text("MIDTOWN", 750,30+1600)

  textSize(20);
  text("Median Rent per Month= $3,839. It is 5% higher than the Manhattan average.", 750,1660);


  for (var i=0;i<id.length;i++){
    var pos_y=map(latitude[i],40.74358589,40.7676275,520+1600,20+1600);
    var pos_x=map(longitude[i],-73.97012271,-73.99685535,720,20);

    strokeWeight(1);
    stroke(128,155,154,30);

    noFill();
    ellipse(pos_x,pos_y,2,2);
  }
}

function mapcoordinates4(){



  var id= harlem.getColumn('tree_id');
  var latitude= harlem.getColumn('latitude');
  var longitude= harlem.getColumn('longitude');

  if ((mouseX>750)&&(mouseY<(2430+15))&&(mouseY>(2430-15))){

  var len=id.length;
  var starty=2490;
  makerec(len,starty);


  }

  textSize(30);
  noStroke();
  fill(128,155,154)
  text("EAST HARLEM SOUTH", 750,30+2400);

  textSize(20);
  text("Median Rent per Month= $3,228. It is 12% lower than the Manhattan average.", 750,2460);


  for (var i=0;i<id.length;i++){
    var pos_y=map(latitude[i],40.78316131,40.79795753,520+2400,20+2400);
    var pos_x=map(longitude[i],-73.93303045,-73.9558197,720,20);

    strokeWeight(1);
    stroke(128,155,154,30);

    noFill();
    ellipse(pos_x,pos_y,2,2);
  }
}
