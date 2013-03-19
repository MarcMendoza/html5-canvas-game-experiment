//retrieve Canvas from html
var canvas;
var ctx;	//context of the canvas

var width, height,				//width and height of canvas
	mouseLocX, mouseLocY,		//location of the mouse, top left of
	mouseClickX, mouseClickY;	//canvas is (0,0)

//variable to keep track whether there is an error
//used so message doesn't go away on new loop
var errorStatus = 0;
	
//possible states of the program
var State = {"MainMenu":0,
				"Schedule":1}
var curState = State.MainMenu;
	
//various debug statements
var Debug = function(){
	ctx.font="20px Comic Sans MS";
	ctx.fillStyle="#999";
	
	ctx.fillText("mouseLocX: " + mouseLocX, 20, 20);
	ctx.fillText("mouseLocY: " + mouseLocY, 20, 50);
	
	ctx.fillText("mouseClickX: " + mouseClickX, 180, 20);
	ctx.fillText("mouseClickY: " + mouseClickY, 180, 50);
};

//clears the screen with a white rectangle
var clear = function(){
	ctx.clearRect(0, 0, width, height);
};

//reset mouse click variables
var mouseClickReset = function(){
	mouseClickX = mouseClickY = -20;
};

//keeps track of the mouse for mouse overs
var OnMouseMove = function onMouseover(e){
	var obj = canvas;
    var top = 0;
    var left = 0;
	
	//fixes offsets so (0,0) is the top left of the canvas
    while (obj && obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
	
	mouseLocX = e.clientX - left + window.pageXOffset;
	mouseLocY = e.clientY - top + window.pageYOffset;
};

//event listener for on click
var OnClick = function OnClick(e){
	var obj = canvas;
    var top = 0;
    var left = 0;
	
	//fixes offsets so (0,0) is the top left of the canvas
    while (obj && obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
	
	mouseClickX = e.clientX - left + window.pageXOffset;
	mouseClickY = e.clientY - top + window.pageYOffset;
};

//updates and draw functions
var UpdateMainMenu = function(){
	
};

var DrawMainMenu = function(){
	ctx.fillStyle = "#000000";
	ctx.textAlign = "center";
	
	ctx.font="30px Comic Sans MS";
	ctx.fillText("Base Title", width/2, height/3-30);
	
	
};

//endless loop function
var Loop = function(){
	clear(); //clear screen of previous draws
	
	var changeState = 0;
	
	//handles states of the program
	switch(curState)
	{
		//Main Menu
		case State.MainMenu: 
						
			break;
			
		//handle logic and draw of sample schedule
		case State.Schedule:			
			
			break;
	}
	
	Debug();
	
	//loop based on a time function delay, to prevent computer from 
	//locking from to many calls
	setTimeout(Loop, 1000/30);
};

//Initialize function
var init = function(){
	//Event handlers for the mouse
	addEventListener("mousemove", OnMouseMove, false);
	addEventListener("click", OnClick, false);
	
	//get canvas from html page
	canvas = document.getElementById("Canvas");
	ctx = canvas.getContext("2d");
	
	width = canvas.width;
	height = canvas.height;
	
	Loop();
};

init();