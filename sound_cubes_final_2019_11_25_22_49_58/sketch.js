let input;
let analyzer;
let color;
let angleZ = 0;
let numCubes = 5;
let numRows = 5;
function setup() {
  createCanvas(400, 650, WEBGL);

  input = new p5.AudioIn();

  input.start();
  
  fft = new p5.FFT();
  
  fft.setInput(input);
  
}

function draw() {

    let volume = input.getLevel();
    let hVal = map(volume, 0, 0.01, 0, 255);
    let sVal = map(volume, 0, 0.05, 0, 255);
  background(hVal, sVal, 255);
  
  let threshold = 0.001;
  let spectrum = fft.analyze();
  if (volume > threshold) {
    stroke(235);
    fill(volume*25000, volume*25000, volume*1195); 
   
    
 

  


  for(let j = 0; j < numRows; j++){
  for(let i =0; i < numCubes; i++){
  
    
    push();

    translate(-100 + i*50, 10000* volume-j*30, -volume*20000*j/2.5);
    

    rotateY(PI/volume* 0.001);
    rotateZ(angleZ);
    
    box(10000 * volume);
    pop();
    
      }
    }
  
  }  
  

  
  angleZ-=0.01
  }