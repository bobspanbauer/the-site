let input;
let analyzer;



function setup() {
  createCanvas(400, 400);
 // slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  
  input = new p5.AudioIn();

  input.start();
  
  fft = new p5.FFT();
  
  fft.setInput(input);
}
function draw() {
  //background(51);
  let volume = input.getLevel();
  
  console.log(volume);
  
  let hVal = map(volume, 0, 0.01, 0, 255);
  let sVal = map(volume, 0, 0.05, 0, 255);
  
  
  
  background(hVal, sVal, 255);
  
   let threshold = 0.001;
  let spectrum = fft.analyze();
  if (volume > threshold) {
  
  
  
  
  angle = volume*200*PI;
  stroke(volume*255);
  translate(200, height);
  branch(100);
  }
}
function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}