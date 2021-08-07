class Box{

constructor(x,y,width,height){
    //properties of the object of Box class
    var options = {
        restitution :0.8,
        friction : 0.5,
        density : 1
    }
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}

//functions that the object is going to perform
display(){
    var angle = this.body.angle;
    console.log(angle);
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(angle);
    rectMode(CENTER);
    fill("red");
    rect(0,0,this.width,this.height);
    pop();
 }
}