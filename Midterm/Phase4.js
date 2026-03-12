function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(230);

  let grid = 10;
  let cell = width / grid;

  for (let x = 0; x < grid; x++) {
    for (let y = 0; y < grid; y++) {

      drawObject(
        x * cell + cell/2,
        y * cell + cell/2,
        cell / 600
      );

    }
  }
}
function drawObject(x, y, s) {

  push();

  translate(x, y);
  scale(s);

  noStroke();
  fill(300);
  ellipse(-5, 0, 540, 540);

  fill(180, 320, 110);
  ellipse(-5, 0, 520, 520);

  fill(80, 230, 250);

  for (let i = 0; i < 4; i++){
    rect(-221 + i * 57, -105, 32, 200);
  }

  for (let i = 0; i < 4; i++){
    rect(10, -105 + i * 57, 200, 32);
  }

  pop();
}