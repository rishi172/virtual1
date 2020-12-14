//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImg,dogImg1;
function preload()
{
  //load images here
   dogImg = loadImage("images/dogImg.png");
   dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  dog = createSprite(450,250,50,50);
  dog.addImage(dogImg)
  dog.scale=0.65;
    database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
}
readStock();
writeStock();
function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);
 
}
  drawSprites();
  text("Food remaining : "+foodS,170,200);
text("Press UP_ARROW Key To Feed Drago milk!",130,10,300,20);
fill(2);
  //add styles here

}
 function writeStock(x){
   if(x<=0){
     x=0
   }else{
     x=x-1
   }
   database.ref('/').update({
     Food:x
   })
 }
 function readStock(data){
  foodS=data.val();
 }

