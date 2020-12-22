var fr,mr


function setup() {
  createCanvas(800,400);
 fr= createSprite(400, 200, 50, 50);     
 fr.shapeColor="blue"
 fr.debug=true
 mr= createSprite(400, 200, 90, 40);
 mr.shapeColor="blue"
 mr.debug=true



}



function draw() {
  background(255,255,255);  
 mr.x=mouseX
 mr.y=mouseY
 // algorithum for is touching
 if(mr.x-fr.x <mr.width/2+fr.width/2 && fr.x-mr.x <mr.width/2+fr.width/2  && mr.y-fr.y <mr.height/2+fr.height/2 && fr.y-mr.y <mr.height/2+fr.height/2) 
 {
   mr.shapeColor="red"
  fr.shapeColor="red"
  }
 else{
   mr.shapeColor="blue"
   fr.shapeColor="blue"
 }

 
  drawSprites();
}