class Bob{
	constructor(x,y,r)
	{
var options={
	restitution:0.3,
	friction:0,
	density:1.2
}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
fill("magenta")
ellipseMode(CENTER);
ellipse(0,0,this.r,this.r);
			pop()
	}

}