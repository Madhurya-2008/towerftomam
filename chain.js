class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 20,
        }
        this.pointB = pointB
        this.slings= Constraint.create(options);
        World.add(world, this.slings);
    }

    fly(){
        this.slings.bodyA = null;
    }

    attach(bodyx){
        this.slings.bodyA = bodyx;
      
        }

    display(){
        if(this.slings.bodyA){
            var pointA = this.slings.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);

            strokeWeight(5);
          stroke(254,254,10)
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
           
            
            pop();
        }
    }

     
    
}

