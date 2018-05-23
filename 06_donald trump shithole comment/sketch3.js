
var headlines = [];
// var hitwords = [
//   "and",
//   "or",
//   "the",
//   "on",
//   "a",
//   "an",
//   "in",
//   "into",
//   "of",
//   "for",
//   "from"
// ];

function preload() {

  // Assemble url for API call
  var url = "https://api.nytimes.com/svc/topstories/v2/opinion.json";
  var apikey = "29bea5743b494f20beda430dafda910a"; // see: https://developer.nytimes.com
  url += "?api-key=" + apikey;

  nytResponse = loadJSON(url);
  // loadJSON() is asynchronous, but calling it inside preload() guarantees
  // we'll have a response before setup() and draw() is run.
}

function setup() {
  createCanvas(640, 1000);
  background(0);

  textSize(14);
  textAlign(LEFT);

  noLoop(); // since we're not animating, one frame is sufficient: run draw() just once

  extractHeadlines();
}

function draw() {
  background(0);

  var lineheight = 24;
  var margin = 40;
  translate(margin, margin);

  for (var i = 0; i < headlines.length; i++) {
    var words = split(headlines[i], ' ');
    // console.log(words);

    var nextX = 0;

    for (var j = 0; j < words.length; j++) {
      var a=words[j];


      // if (hitwords.includes(words[j].toLowerCase()))
      if((a[0]=="T") && (a[1]=="r") && (a[2]=="u") && (a[3]=="m")) {
        var res=[]

        if (a[-1]!="p"){
        res=a.slice(5);}
        else if(a[-1]=="p"){
          break;
        }
          // console.log(res);

        fill("orange");
        words[j]='Shithole'+res;
      } else {
        fill(255);
      }

      text(words[j]+' ', nextX, i*lineheight);
      nextX += textWidth(words[j]+' ');
    }
  }
}

function extractHeadlines() {

  // console.log(nytResponse); // take a look at the full API response structure

  for (var i = 0; i < nytResponse.results.length; i++) {
    var h = nytResponse.results[i].title;
    // besides .title, other text data available to you include:
    // .abstract, .byline, .section, etc. etc.
    append(headlines, h);
  }

  // console.log(headlines); // make sure counted data looks as expected
}
