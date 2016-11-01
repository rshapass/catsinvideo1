var capture;
var glitter;
var stickers;

function preload() {
  // glitter = loadImage('stickers/pinkglitter.jpg');
    for (var i = 0; i < 4; i++) {
    stickers[i] = loadImage('stickers/stickers' + i + '.gif');
  }

}

function setup() {
  createCanvas(640, 480);
  capture = createCapture(VIDEO);
  capture.size(640, 480);
  //capture.hide();
}


function draw() {
  background(255);
  image(capture, 0, 0, 640, 480);
  // blend(glitter, 0, 0, 1200, 800, 0, 0, 640, 480, OVERLAY);
  // tint(255,192,203,150)
}

function mousePressed() {
  var r = floor(random(0, stickers.length));
  var b = new Bubble(mouseX, mouseY, stickers[r]);
  bubbles.push(b);
}


function draw() {
  background(0);
  image(bg, 0,0,1200,800,bg.x,bg.y,windowWidth,windowHeight);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
}

function Bubble(x, y, stickers) {
  this.x = x;
  this.y = y;
  this.stickers = stickers;

  this.display = function() {
    imageMode(CENTER);
    image(this.stickers, this.x, this.y);
  }

  this.move = function() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }
}
