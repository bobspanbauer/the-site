//formula for spherical projection:
//  x = r * sin(latitude) * cos(longitude)
//  y = r * sin(latitude) * sin(longitude)
//  z = r * cos(latitude)


let resolution = 30;
let r = 200;
let angle = 0;

//we are going to use a 2d array to store xyz values
let globe = [];

function setup() {
  createCanvas(600, 600, WEBGL);
  
  //initialize 2d array; make an extra value so we don't have an end of array error in our draw loop
  for(let i =0; i < resolution + 1; i++){
      globe[i]=[];
    for(let j = 0; j < resolution + 1; j++){
      globe[i][j] = 0;
    }
  }
  
  
  //this nested for loop will do our sphere math so we only do it once
for(let i = 0; i < resolution/3 + 1; i++){

  //map longitude resolution to a range that is a full circle
  let long = map(i, 0, resolution, 0, TWO_PI)

  for(let j = 0; j < resolution + 1; j++){
    
    
    
    
    
    
    //map latitude resolution to half a circle
    let lat = map(j, 0 , resolution, 0, TWO_PI); 
    
    
 
    //the equations for generating x,y,z from sin,cos,long,lat,radius
    let x = r * sin(lat) * cos(long);
    let y = r * sin(lat) * sin(long);
    let z =  r * cos(lat);
    
    //fill our 2d array with the generated points, stored as vectors
    globe[i][j] = createVector(x,y,z);
         
  }
}
  
}

function draw() {
  background(0);
  orbitControl();
  rotateY(angle);


  push();
  translate(80, 30, 0);
  
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(70,20, 20, 60, 60);
  fill('#222222');
  pop();

  push();
  translate(-80, -30, 0);
  
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(70);
  fill(255,90, 200)
  pop();
  
  //translate(240, 0, 0);
  push();
  //rotateZ(frameCount * -0.02);
  rotateX(frameCount * -0.02);
  //rotateY(frameCount * -0.02);
  torus(250, 20);
  pop();
  
  //this nested for loop will draw our shape
  for(let i = 0; i < resolution; i++){
    let long = map(i, 0, resolution, -PI, PI)

    beginShape(TRIANGLE_STRIP)
    
    

    
    
    for(let j = 0; j < resolution+1; j++){
      let lat = map(j, 0 , resolution, -HALF_PI, HALF_PI); 

      //these are the points of our triangle shapes
      let v1 = new p5.Vector(globe[i][j].x, globe[i][j].y, globe[i][j].z);
       let v2 = new p5.Vector(globe[i+1][j].x, globe[i+1][j].y, globe[i+1][j].z);
      
      stroke(0);
      //this is where we draw the vertexes.  it's also a great spot to add some       //kind of random value or make them move using trigonometric functions or       //  whatever else!
      vertex(v1.x, v1.y, v1.z);
      vertex(v2.x, v2.y, v2.z);
    }
    endShape(CLOSE)
  }     

 
      
      //this is just an angle to make the sphere rotate in our view
angle+=0.01

}