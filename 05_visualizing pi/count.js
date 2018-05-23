
var pi;
var pos;
var dia;
var str;
var pi_split;
var count=['0','0','0','0','0','0','0','0','0','0'];
var index=0;

function preload() {
str = loadStrings("pi-1million.txt");
console.log('I am in Preload'+str);

// noLoop();

}

function splitstring(){
  pi=String(str);
  pi_split = split(pi, '');
  console.log(pi_split.length);
}

function setup() {
  splitstring();
  createCanvas(1000, 1000);
  background('#DDE0AB');

  stroke(255);
  noFill();

}

function draw() {
for(var i=0; i<pi_split.length; i++){
  index=pi_split[i];
  count[index]++
}

console.log(count);

}
//100359
