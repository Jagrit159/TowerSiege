const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,stand1;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(500,270,250,15);
    stand2 = new Ground(1000,300,250,15)

    box1 = new Box(520,240,50,50);
    box2 = new Box(590,240,50,50);

    box3 = new Box(560,200,50,50);
    box4 = new Box(1090,240,50,50);

    box5 = new Box(1040,240,50,50);
    box6 = new Box(1065,160,50,50);

    polygon = new Polygon(100,100,40,40);

    slingshot = new SlingShot(polygon.body, {x:200, y:100});
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    stand1.display();
    stand2.display();

    box3.display();
    box4.display();

    box5.display();
    box6.display();

    polygon.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX , y:mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
