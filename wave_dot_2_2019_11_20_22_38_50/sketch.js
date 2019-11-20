
let r = 35;
let time = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  
  //translate (width/2, height/2);
  
  for(let j = 0; j< height/r; j++){
  
  for(let i = 0; i < width/r ; i++){
  
      const xAngle = map(0, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(0, 0, height, -20 * PI, 4 * PI, true);
     
      const angle = xAngle * (i / width *2 ) + yAngle * (j / height * 8);


    
    let bigX = i * r;
    let bigY = j * r;
    
    let x = bigX + 20 * cos(3 * PI * time + angle);
    let y = bigY + 20 * sin(3 * PI * time + angle);
    
  noFill();
  ellipse(bigX,bigY, r *2);
  
//   let x = bigX +r * cos(time);
//   let y = bigY + r * sin(time);
  
  fill(150,200,255);
  ellipse(x,y,r/4);
    
  } 
    
  }
  
  
  
  
 time+=0.01
}