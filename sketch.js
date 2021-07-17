var dog,sadDog,happyDog,database ,foods,foodstock,foodObj,addfoods;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

addFood=createButton("Add food")
  addFood.position(850,100)
addFood.mousePressed(addFoods)


feed=createButton("Feed the Dog")
feed.position(700,100)
feed.mousePressed(feedDog)



  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  
  

  drawSprites();
}

//function to read food Stock
foodobj = new Food();
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);

//function to update food stock and last fed time
function feedDog(){



if(foodObj.getFoodStock()<=0){

foodObj.updateFoodStock(foodObj.getFoodStock()*0)

}else{
foodObj.updateFoodStock(foodObj.getFoodStock()-1)



}

dog.addImage(happydog);








}
//function to add food in stock

function addFoods(){

foodS++;
database.ref('/').update({
Food:foods

}

)

}








