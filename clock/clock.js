/*CODE BY ROHIT KUMAR *
* DIGITAL CLOCK       *
*					  */
function clock()
{
	angleMode(DEGREES);
	background(200);
	strokeWeight(3);
	push();
	scale(2);
	text(hour()+' '+minute()+' '+second()+' ',10,20);
	pop();
	//arc(100,100,200,200,-90,250);
	stroke(246,178,9);
	fill(95,246,9);
	let sec = map(second(),0,60,-90,270);
	arc(200,200,260,260,-90,sec,PIE);
	fill(246,9,106);
	stroke(9,192,246);
	let min = map(minute(),0,60,-90,270);
	arc(200,200,230,230,-90,min,PIE);
	fill(9,246,246);
	stroke(224,9,246);
	let hr = map(hour(),0,12,-90,270);
	arc(200,200,200,200,-90,hr,PIE);
	
	
	
}