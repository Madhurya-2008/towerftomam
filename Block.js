class Block{
    constructor(x, y, width, height, angle) {
        var options = {
          restitution : 0.7,
          friction : 0.3,
          isStatic : false,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visible=255;
        this.wood=loadImage("wood.jpg")
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<8){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        image(this.wood, 0, 0, 0, 0);
        pop();
        }

        else{
       World.remove(world,this.body);
       push();
       
       tint (255,this.visible);
       image(this.wood,this.body.position.x,this.body.position.y,0,0);
       this.visible=this.visible-15;
       pop ();
        }
        
        
      }
}
