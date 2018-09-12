function rain() {
	this.y = random(0,height);
	this.x = random(0,width);
	this.speed=random(1,3);
	this.len=random(10,30);
		this.drop=function() {
		ellipse(this.x,this.y,2,this.len);
		//fill(random(0,255),random(0,255),random(0,255));
		fill(128,0,128);//purple color
		this.y=this.y+this.speed;
		if(this.y>height)
		{
				this.y = random(0,50);
				this.x = random(0,width);
		}
		}
		
	}