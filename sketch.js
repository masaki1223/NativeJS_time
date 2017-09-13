var x = 0;
var counter = 1;
var color=51;
var switcher = false;
function setup() {
	createCanvas(200, 200);
	timer = createP(0);
	button_start = createButton("start");
	button_stop = createButton("stop");
	button_start.mousePressed(startTimer);
	button_stop.mousePressed(stopTimer);

	button_doTimer = createButton("startTimer");
	button_doTimer.mousePressed(doTimer);
	//setInterval(timeIt,1000);
}

function doTimer(){
	if(switcher === false){
	startTimer();
	button_doTimer.html("stopTimer");
	} else if(switcher === true){
		stopTimer();
		button_doTimer.html("startTImer");
	}
}
function startTimer(){
	switcher=true;
	interval = setInterval(timeIt,1000);
}
function stopTimer(){
	switcher = false;
	clearInterval(interval); //stops the timer
}

// function mousePressed(){
// 	timer.html(0);
// 	setInterval(timeIt,1000);
// 	console.log("Mouse pressed")
// }

function timeIt(){
	timer.html(counter);
	counter++;
}
// function mousePressed(){
// 	console.log("mousepressed")
// 	setTimeout(rainbow,3000);

// }

// function rainbow(){
// 	createP("3secs");
// 	setTimeout(rainbow,100);
// }

function draw() {

	//timer.html(frameCount);
	if(switcher===true){
		color = 200;
	} else if(switcher === false){
		color = 0;
	}
	background(color);
	stroke(255);
	line(x,0,x,height);
	x = x + 3;

if(x > width){
	x=0;
}

}


