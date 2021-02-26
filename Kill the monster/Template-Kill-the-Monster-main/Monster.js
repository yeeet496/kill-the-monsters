class Monster{

constructor(x,y,width,height){
var options= {
isStatic:true,
restitution:0.5,
friction: 1.0
}
this.body = Bodies.rectangle(x,y,width,height)
this.height=height
this.width=width
this.image = loadImage("images/monster01.png")
World.add(world,this.body)
}
display(){
push();
translate(this.body.position.x,this.body.position.y)
imageMode(CENTER)
image(this.image,0,0,this.height,this.width)
pop();
}
}