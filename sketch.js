// One ParticleSystem
let emitter;

//{!1} One repeller
let repeller;
let repeller2
let att;
let att2;

function setup() {
  createCanvas(400, 400);
  emitter = new Emitter(width / 2, height/2);
  repeller = new Repeller(width / 4, 350);
  repeller2 = new Repeller(width*3 / 4, 350);
  att = new Attractor(20, height/2);
  att2 = new Attractor(380, height/2);
}

function draw() {
  background(255);
    
  repeller.setPower(mouseX);
  repeller.move(0.5);

  repeller2.setPower(mouseX);
  repeller2.move(0.5);
  
  emitter.addParticle();
  emitter.addParticle();
  emitter.addParticle();
  
  // We’re applying a universal gravity.
  let gravity = createVector(0, 0.1);
  emitter.applyForce(gravity);
  //{!1} Applying the repeller
  emitter.applyRepeller(repeller);
  emitter.applyRepeller(repeller);
  emitter.applyAttractor(att);
  emitter.applyAttractor(att2);
  emitter.run();

  repeller.show();
  repeller2.show();
  att.show();
  att2.show();
}
