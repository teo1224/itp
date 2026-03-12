function setup() {
  createCanvas(600, 600);
  background(230);
  noStroke();
  fill(300);
  ellipse(45, 45, 81, 81);
  noStroke();
  fill(0);
  ellipse(45, 45, 78, 78);
  fill(250, 250, 250);
  for (let i = 0; i < 4; i++){
    rect(12 + i * 8.5, 28, 5, 30);
  }
  for (let i = 0; i < 4; i++){
    rect(46, 28 + i * 8.5, 30, 5);
  }
}