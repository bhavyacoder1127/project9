var rectangle;
function setup() {
  createCanvas(400,400);
rectangle = createSprite(200,200,20,20);
}

function draw() 
{

  background(30);
if (keyIsDown(RIGHT_ARROW)){
  rectangle.x = rectangle.x+5;
  background('blue');
}
if (keyIsDown(LEFT_ARROW)){
  rectangle.x = rectangle.x-5;
  background('yellow');
}
if (keyIsDown(UP_ARROW)){
  rectangle.y = rectangle.y-5;
  background('green');
}
if (keyIsDown(DOWN_ARROW)){
  rectangle.y = rectangle.y+5;
  background('red');
}
drawSprites();
}




