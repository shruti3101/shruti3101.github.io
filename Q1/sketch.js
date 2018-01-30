function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);

  var x=10;
  var y=120;

  var h=hour();
  var m=minute();
  var s=second();
  fill(255);
  text('The time right now is:\n' + h + ':'+ m +':'+ s,5, 50);

  fill(244,64,107)
  rect(x, y, s*1.5 ,20)

  hhand= map(h,0,12,0,2*PI);
  mhand= map(m,0,60,0,2*PI);
  shand= map(s,0,60,0,2*PI);
  //
  ellipse(width/2,width/2,100,100);
  fill(51,165,104)
  arc(width/2,width/2,90,90,PI/2,hhand, PIE);
  fill(118,51,165)
  arc(width/2,width/2,70,70,PI/2,mhand, PIE);
  fill(239,239,98)
  arc(width/2,width/2,50,50,PI/2,shand, PIE);
}



// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }


//
// //
// // // A wind direction vector
// // var wind;
// // // Circle position
// // var position;
// //
// // function setup() {
// //   createCanvas(720, 200);
// //   // Request the data from apixu.com
// //   var url = 'https://api.apixu.com/v1/current.json?key=513d8003c8b348f1a2461629162106&q=NYC';
// //   loadJSON(url, gotWeather);
// //   // Circle starts in the middle
// //   position = createVector(width/2, height/2);
// //   // wind starts as (0,0)
// //   wind = createVector();
// // }
// //
// // function draw() {
// //   background(200);
//
//   // This section draws an arrow pointing in the direction of wind
//   push();
//   translate(32, height - 32);
//   // Rotate by the wind's angle
//   rotate(wind.heading() + PI/2);
//   noStroke();
//   fill(255);
//   ellipse(0, 0, 48, 48);
//
//   stroke(45, 123, 182);
//   strokeWeight(3);
//   line(0, -16, 0, 16);
//
//   noStroke();
//   fill(45, 123, 182);
//   triangle(0, -18, -6, -10, 6, -10);
//   pop();
//
//   // Move in the wind's direction
//   position.add(wind);
//
//   stroke(0);
//   fill(51);
//   ellipse(position.x, position.y, 16, 16);
//
//   if (position.x > width)  position.x = 0;
//   if (position.x < 0)      position.x = width;
//   if (position.y > height) position.y = 0;
//   if (position.y < 0)      position.y = height;
//
//
// }
//
// function gotWeather(weather) {
//
//   // Get the angle (convert to radians)
//   var angle = radians(Number(weather.current.wind_degree));
//   // Get the wind speed
//   var windmag = Number(weather.current.wind_mph);
//
//   // Display as HTML elements
//   var temperatureDiv = createDiv(floor(weather.current.temp_f) + '&deg;');
//   var windDiv = createDiv("WIND " + windmag + " <small>MPH</small>");
//
//   // Make a vector
//   wind = p5.Vector.fromAngle(angle);
// }
