function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  background(0);
  strokeWeight(0.15);
}

function draw() {
  translate(width/2,height/2);

  rotate(frameCount*4)
  noFill();

  angleMode(CENTER);
  stroke(lerpColor(color('#DB7093'), color('#00FF7F'), frameCount/120));

  ellipse(60,10,100,100);
  ellipse(-60,-10,100,100);
  ellipse(-10,60,100,100);
  ellipse(10,-60,100,100);

  polygon(0,0,80,7);

  line(0,0,10,10);

  strokeWeight(0.1);
  polygon(0,0,160,7);
  ellipse(100,0,160,280);
  strokeWeight(0.08);
  ellipse(90,0,280,320);

  scale(frameCount/50);
  strokeWeight(0.1);
  polygon(0,0,100,5);

  if (frameCount == 45) {
    frameCount=0;
    frameRate(100);
    background(0);
  }


    function polygon(x, y, radius, npoints) {
    var angle = TWO_PI / npoints;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius;
      var sy = y + sin(a) * radius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    }


}
