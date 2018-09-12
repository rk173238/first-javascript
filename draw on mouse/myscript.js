
function setup() { 
	
 createCanvas(1400, 1400);
} 


function draw() { 
	background(255);
	var col=map(mouseX,0,1400,0,255)
	fill(col);
	ellipse(mouseX,mouseY,10,10);
}

