var minutes
var hours
var seconds
var mintueAngle
var hourAngle
var SecondAngle

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES)
}

function draw() {
  background(0,0,0);  
  
  translate(200,200);
  rotate(-90);

  hours = hour();
  minutes = minute();
  seconds = second();

  secondAngle = map(seconds, 0, 60, 0, 360)
  minuteAngle = map(minutes, 0, 60, 0, 360)
  hourAngle = map(hours%12, 0, 12, 0, 360)

  push()
  rotate(secondAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0)
  pop()

  push()
  rotate(minuteAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,75,0)
  pop()

  push()
  rotate(hourAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,0)
  pop()

  point(0,0)

  noFill();
  stroke(255,0,0)
  strokeWeight(10)
  arc(0, 0, 300, 300, 0, secondAngle)

  noFill();
  stroke(0,255,0)
  strokeWeight(10)
  arc(0, 0, 275, 275, 0, minuteAngle)

  noFill();
  stroke(0,0,255)
  strokeWeight(10)
  arc(0, 0, 250, 250, 0, hourAngle)



  drawSprites();
}
