class Attach{
    constructor(bodyA,bodyB){
var attach={
    bodyA:bodyA,
    bodyB:bodyB,length:100,stiffness:0.4
}
this.chain=Constraint.create(attach)
World.add(world,this.chain)
    }
    display(){
        var pointA=this.chain.bodyA.position
        var pointB=this.chain.bodyB.position
        line (pointA.x,pointA.y,pointB.x,pointB.y)
    }
}