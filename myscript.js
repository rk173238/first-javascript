var r=[];

function setup() { 
	//size(600,600,P3D);
 createCanvas(1400, 1400);
	for(var i=0;i<1000;i++)
	{
		r[i]=new rain();
	}
} 
var y=Math.random(0,height);
var x=Math.random(0,width);

function draw() { 
		background(255);
	
	//fill(random(0,255),random(0,255),random(0,255));
	for(var i=0;i<1000;i++)
	{
		r[i].drop();
	}
}

