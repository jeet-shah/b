class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            pointB: pointB,
            bodyA: bodyA,
            stiffness: 0.02,
            length: 0
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
            }
            else {
                strokeWeight(3);
            }
            pop();
                }
    }
}
