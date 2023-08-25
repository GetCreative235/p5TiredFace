function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
//hair strand
  ellipse(100,120,50,95)
  ellipse(270,120,50,95)
//head
  noFill()
  ellipse(180,180,170,200)
//hair
  fill(0)
  arc(120, 130, 120, 120, radians(120), radians(320));
  arc(250, 130, 120, 120, radians(220), radians(430));
  arc(180, 100, 90, 90, PI, radians(360), CHORD);
//eyesbags
  fill(255,200,193)
  ellipse(140,190,45,30)
  ellipse(220,190,45,30)
//eyes
  fill(255,255,255)
  ellipse(140,175,50,30)
  ellipse(220,175,50,30)
//pupils
  fill(0,0,0)
  circle(140,175,28)
  circle(220,175,28)
//mouth then nose
  noFill()
  strokeWeight(2)
  arc(180, 280, 70, 70, radians(220), radians(325));
  arc(180, 220, 30,30,270,radians(200))
}