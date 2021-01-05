class Mango{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.image = loadImage("images/mango.png");
        this.body = Matter.Bodies.circle(x,y,20, options);
        
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
       push();
        translate(pos.x,pos.y);
        angleMode(RADIANS);
        rotate(angle);
        fill(rgb(83,192,203))
        ellipseMode(RADIUS);
        ellipse(0,0,20,20);
        pop();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width/2, this.height/2);
    }
}