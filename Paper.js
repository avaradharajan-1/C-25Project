class paper{
	constructor(x,y,r,angle)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.angle=this.angle;
		this.image = loadImage("paper.png")
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
 		World.add(world, this.body);

	}
	
		
}
	function keyPressed(){
		if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,Y:-145});
   }
	}
	
	
	display()
	   {
			
			var groundPos=this.body.position;
			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,600,500,this.w, this.h);
			pop()
			
	
}