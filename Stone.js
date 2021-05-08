class Stone{
	constructor(x,y){
	// assign options to the rubber ball
	
		var options = {
		  'density':12,
		  'friction': 0.9,
		  'restitution':0.8
		}

	    this.x=x;
		this.y=y;
		
		this.body=Bodies.rectangle(this.x, this.y, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			rect(0, 0, this.width, this.height);

			pop()
	}

}