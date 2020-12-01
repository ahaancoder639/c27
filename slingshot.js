class Sling {

constructor(objectA,objectB){

var options={

bodyA:objectA,
bodyB:objectB,
lenght : 10,
stiffness : 0.5
}



this.Sling = Matter.Constraint.create(options)

World.add(world, this.Sling);

}


  
display(){
var pointA = this.Sling.bodyA.position;
var pointB= this.Sling.bodyB.position;

line(pointA.x,pointA.y,pointB.x,pointB.y);





}


}






























































































