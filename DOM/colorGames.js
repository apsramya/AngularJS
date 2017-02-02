var numSquares = 6;
var colors =[];
var pickedColor;
var squares = document.getElementsByClassName("square");
var messageDisplay = document.querySelector("#message");
var selectedColor = document.querySelector("span");
var h1 = document.getElementsByTagName("h1")[0];
var reset = document.querySelector("button");
var modeButtons =  document.querySelectorAll(".mode");

init();

function init(){
	//mode button listeners
	setUpModeButtonListeners();
	setUpSquares();
	resetAll();
}

function setUpModeButtonListeners(){
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click",function(){
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	this.classList.add("selected");
	this.textContent  === "Easy" ? numSquares = 3 : numSquares = 6;
	resetAll();
	});
}
}

function setUpSquares(){
	for (var i =0; i < squares.length ; i++){
	//add click listeners
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;//squares[i] instead of this wont work/
		if ( clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			reset.textContent = "Play Again?";
		}
		else{
			this.style.background = "black"; //this works
			messageDisplay.textContent = "Try Again!";
		}
	});
}

}

function resetAll(){
	if (reset.textContent === "Play Again?"){
		reset.textContent = "New Colors";
		messageDisplay.textContent = "";

	}
	colors = generateRandomColors(numSquares);
	//pickcolor
	pickedColor = pickColor();
	//color display rgb equal to pickedColor
	selectedColor.textContent = pickedColor;
	//change the colors of the squares of page
	for (var i =0; i < squares.length ; i++){
	//add initial colors 
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	} else{
		squares[i].style.display = "none";
	}	
}
h1.style.background = "steelblue";
}

//selectedColor.textContent = pickedColor;

function changeColors(color){
	for(var i = 0; i <squares.length ; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor((Math.random() * colors.length));
	return colors[random];
}

function generateRandomColors(numSquares){
	//make an arr
	var arr = [];
	//repeat num times
	for(var i =0; i < numSquares ; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that arr
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb"+"("+ r +", " + g +", " + b +")";
}

reset.addEventListener("click",function(){	
	resetAll();
});

