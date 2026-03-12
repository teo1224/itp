# Midterm

### Phase1
<img src="Phase1.png" width="300">

I chose the ableton logo

### Phase2
``` function setup() {
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
} ```

I used this code to experiment with several attempts and was able to successfully create a similar shape

### Phase3

```function setup() {
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
}```

I enlarged the shape and changed its colors.

### Phase4

```function setup() {
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
}```

Finally, I divided the grid into 10 sections and replicated the shape.

#####The process of modifying the code to find similar shapes and colors and placing them in the correct positions was difficult, but it was also fun