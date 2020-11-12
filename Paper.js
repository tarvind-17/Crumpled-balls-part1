class Paper {
    constructor(x,y,r)
    {
        var paper_options={
            restitution:0.4,
            friction: 0.6,
            density:1.2,
        }

        this.x=x;
        this.y=y;
        this.r=r;

        this.body = Bodies.circle(this.x,this.y,this.r/2,paper_options);
        World.add(world,this.body);
    }

    display()                
    {   var paperpos =this.body.position;
        push();
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER);
        strokeWeight()
        fill("pink");
        
        ellipse(0, 0,this.r,this.r);
        pop();
    }
}