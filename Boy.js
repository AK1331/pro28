class Boy {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image=loadImage("images/boy.png");

    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      rect(pos.x, pos.y, this.width/4, this.height/4);
      imageMode(CENTER);
      fill(rgb(83,192,203));
      image(this.image, pos.x, pos.y, 2*this.width, 5*this.height);

    }
  };