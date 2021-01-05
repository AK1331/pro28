class Stone{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.image = loadImage("images/stone.png");
        this.body = Matter.Bodies.circle(x,y,20/2, options);
        
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
        
        ellipse(0,0,20,20);
        pop();
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, pos.x, pos.y, this.r/100, this.r/100);
    }
}