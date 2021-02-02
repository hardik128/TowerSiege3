const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygonImg;
var backgroundImg;
var gameState = "onsling";
var score=0;
function preload(){
  polygonImg=loadImage("polygon.png")
}

var boxes=[]

function setup(){
    var canvas = createCanvas(1200,600);
   
  
    engine = Engine.create();
    world = engine.world;
   
    ground01 = new Ground(600,590,1200,20);
    ground02 = new Ground(550,500,400,20);
    ground03 = new Ground(950,300,300,20);
    polygon1 = new Polygon(250,250,20);

    sling1 = new SlingShot(polygon1.body,{ x: 250, y: 250})
    Engine.run(engine)
    
   box1=new Box(430,460,40,60);
   box2=new Box(470,460,40,60);
   box3=new Box(510,460,40,60);
   box4=new Box(550,460,40,60);
   box5=new Box(590,460,40,60);
   box6=new Box(630,460,40,60);
   box7=new Box(670,460,40,60);
   box8=new Box(470,400,40,60);
   box9=new Box(510,400,40,60);
   box10=new Box(550,400,40,60);
   box11=new Box(590,400,40,60);
   box12=new Box(630,400,40,60);
   box13=new Box(510,340,40,60);
   box14=new Box(550,340,40,60);
   box15=new Box(590,340,40,60);
   box16=new Box(550,280,40,60);
   box17=new Box(870,260,40,60);
   box18=new Box(910,260,40,60);
   box19=new Box(950,260,40,60);
   box20=new Box(990,260,40,60);
   box21=new Box(1030,260,40,60);
   box22=new Box(910,200,40,60);
   box23=new Box(950,200,40,60);
   box24=new Box(990,200,40,60);
   box25=new Box(950,140,40,60);
  }

function draw(){
   if(backgroundImg){
     background(backgroundImg)
   }
  frameRate(120)
   sling1.display();
   ground01.display();
   ground02.display();
   ground03.display();
   polygon1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();

   for (var i = 0; i < boxes.length; i++) {
    boxes[i].display();
  }
  fill(20,150,220);
  textSize(30);
    text("Score: " +score,100,50);
   
    getBackground();
}

function mouseDragged(){
   if (gameState==="onsling"){
        Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}
}

function mouseReleased(){
   sling1.fly(); 
   gameState = "launched"
}

function keyPressed(){
   if ((keyCode === 32) && (gameState==="launched")){
      sling1.attach(polygon1.body)
      Matter.Body.setPosition(polygon1.body, { x: 250, y: 250 });
      gameState="onsling";
      
}
}

async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSN = await response.json();
  var DateTime = responseJSN.datetime       
  var hour = DateTime.slice(11,13);   
  console.log(hour)
  if ((hour>=06) && (hour<=19)){
       backgroundImg=loadImage("bg.png")
  }
  else {backgroundImg=loadImage("bg2.jpg")}
}



