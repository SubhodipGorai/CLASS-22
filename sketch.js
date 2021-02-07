const Engine =Matter.Engine;
const World =Matter.World;
const Bodies = Matter.Bodies;

var myEngine,myWorld,bird,ground;

function setup() {
  createCanvas(400,400);
myEngine = Engine.create();
myWorld = myEngine.world;

var birdoptions = {
  restitution:0.9
}
bird = Bodies.circle(200,200,30,birdoptions);
World.add(myWorld,bird);
console.log(bird)

var options = {
  isStatic:true
}
ground = Bodies.rectangle(200,390,400,10,options);
World.add(myWorld,ground);


}

function draw() {
  Engine.update(myEngine);
  background(50,200,40);  
  ellipseMode(RADIUS)
  ellipse(bird.position.x,bird.position.y,30,30)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10)




}