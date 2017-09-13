var x = 0;
var counter = 1;
var timers = [];
var num=50;
function setup() {
	createCanvas(200, 200);
	timer1 = createP(0);
	timer2 = createP(0);

	makeTimer(timer1,100);
	makeTimer(timer2,40);
	loopTimer();
	startTimer();
	console.log(timers);
}

function loopTimer(){//make timer array
	for(i=0;i<num;i++){
		timers.push("timer"+i);
		timers[i]=createP(0);
	} 
}
function startTimer(){
	for(i=0;i<num;i++){
		makeTimer(timers[i],100+i*20);
	}
}
function makeTimer(elt,wait){
	var counter = 0;
	setInterval(timeIt, wait);

	function timeIt(){
		elt.html(counter);
		counter++;
	}
	
	
}




function draw() {
	background(51);
	stroke(255);
	line(x,0,x,height);
	x = x + 3;

if(x > width){
	x=0;
}

}


