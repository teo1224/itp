function setup() {
  createCanvas(600, 600);
  background(230);
  noStroke();
  fill(300);
  ellipse(295, 300, 540, 540);
  noStroke();
  fill(180, 320, 110,);
  ellipse(295, 300, 520, 520);
  fill(80, 230, 250,);
  for (let i = 0; i < 4; i++){
    rect(79 + i * 57, 195, 32, 200);
  }
  for (let i = 0; i < 4; i++){
    rect(310, 195 + i * 57, 200, 32);
  }
}