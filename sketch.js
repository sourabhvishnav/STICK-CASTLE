
function setup() {
  createCanvas(600,400);
}
function draw() {
  background("tan"); 
  
  fill(170);
  rectMode(CENTER);
  rect(135,264,15,270);

  rect(160,280,25,235);
  rect(190,295,25,210);
  rect(220,310,25,180);
  rect(370,280,25,235);
  rect(340,295,25,210);
  rect(310,310,25,180);
  rect(265,330,40,200);
  
  rect(395,264,15,270);
  
  
  triangle(265,190,285,220,245,220);
  triangle(160,135,175,155,145,155);
  triangle(370,135,385,155,355,155);

  drawSprites();
}