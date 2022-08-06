function setup() {
  createCanvas(1200, 900, WEBGL);
  camera(0, 0, -500);
  colorMode(HSB);
}


function ys(){
  strokeWeight(1);
  scale(3);
  x_l = 0;
  y_l = 0;
  
  for (let x=0; x<=100;x+=10){
    y = (log(x/100))*0.5*x;
    line(x_l, y_l, x, y);
    x_l = x;
    y_l = y;
  }
}

function drawLine(x1, y1, z1, x2,y2, z2){
  beginShape();
  vertex(x1,y1,z1);
  vertex(x2,y2,z2);  
  endShape();
}

function draw() {
  background(220);
     
  rotateY(1.8);
  rotateZ(0.2);
  rotateX(PI);
  smooth();
  strokeWeight(2);
  stroke('red');
  drawLine(0, 0, 0, width,0,0);
  stroke('blue');
  drawLine(0, 0, 0, 0,width,0);
  stroke('black');
  drawLine(0, 0, 0, 0,0,width);
  
  for (let i=0; i<50;i++)
    {
    push();
    rotateX(i);
    //rotateX(frameCount * 0.01);
    //rotateY(frameCount * 0.01);
    stroke(255-i, 255, i+180, i);
    ys();
    
    pop();
   }
   orbitControl();
   
   
}
