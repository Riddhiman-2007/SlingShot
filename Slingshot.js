class Slingshot{
 constructor(bA,bB){
    var options ={
        bodyA:bA,
        pointB:bB,
        stiffness:0.7,
        length:50
    }
    this.sling = Constraint.create(options)
    World.add(world,this.sling)
    this.pointB = bB
 }
display(){
    if(this.sling.bodyA!==null){
        push();
        strokeWeight(3)
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
        //line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.sling.bodyB.position.x,this.sling.bodyB.position.y)
        pop();
    }
}
fly(){
this.sling.bodyA = null
}
}