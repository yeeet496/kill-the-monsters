class Throw{
constructor(bodyA,bodyB){
    var options={
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.1,
    length: 10
}
this.pointB=pointB  
this.throw= constraint.create(options);
World.add(world, this.throw);
}
fly(){
this.throw.bodyA=null;
}
launch(bodyA){
this.throw.bodyA=bodyA=bodyA

}
display(){


        
}
}