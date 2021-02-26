class Superhero{

constructor(x,y,width,height){
var options = {
isStatic: false,
restitution:0,
friction: 0,
 density:  1.2,
}
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height= height
World.add(world, this.body)
}
display(){
var angle= this.body.angle 
var pos= this.body.position
push();
imageMode(CENTER)
translate(this.image,0,0,this.width,this.height)
pop();


}

}