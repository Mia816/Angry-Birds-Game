const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height-70,1200,10);
    platform = new Ground(150, 435, 300, 170);

    pig1 = new Pig(880, 500);

    log1 = new Log(750,529,200,PI);
    log2 = new Log(780,529,200,PI);
    log3 = new Log(810,529,200,PI);

    log4 = new Log(950,529,200,PI);
    log5 = new Log(980,529,200,PI);
    log6 = new Log(1010,529,200,PI);

    log7 = new Log(780,270,120,PI/2);
    log8 = new Log(980,270,120,PI/2);

    log9 = new Log(820,120,180,PI);
    log10 = new Log(940,120,180,PI);
    log11 = new Log(880,40,150,PI/2);

    box1 = new Box(750,239,50,50);
    box2 = new Box(1010,239,50,50);
    box3 = new Box(750,180,50,50);
    box4 = new Box(1010,180,50,50);
    box5 = new Box(880,20,50,50);
    // pig3 = new Pig(810, 220);

    
     bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:200});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
 
    ground.display();
    pig1.display();
    pig1.score();

    log1.display();
    log2.display();
    log3.display();

    log4.display();
    log5.display();
    log6.display();

    log7.display();
    log8.display();
    log9.display();
    log10.display();
    log11.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
  
    // pig3.display();
    // pig3.score();
    // log3.display();

    // log4.display();
    // log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(bird.body, {x: 200, y: 50});
       slingshot.attach(bird.body);
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "Background.jpg";
    }
    else{
        bg = "Background.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}