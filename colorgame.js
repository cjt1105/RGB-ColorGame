var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor()
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = $("#reset");
var easy = $("#easyBtn")
var hard = $("#hardBtn")

easy.click(function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none"
		}
	}
});

hard.click(function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});

$(reset).click(function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick new random color from array
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors"
	messageDisplay.textContent = ""
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial color
	squares[i].style.background = colors[i];
	//add click listener to square
	squares[i].addEventListener("click", function(){
	// 	//grab color of picked square
	var clickedColor = this.style.background;
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!"
		resetButton.text("Play Again?")
		changeColors(clickedColor);
		h1.style.background = clickedColor
	} else {
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again!"
	}
	});
	
}

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
		//change each color to match picked color
		squares[i].style.background= color;
	}
}

function pickColor(){
	//choose a random color out of the colors array
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//get random color and push into arr
		arr.push(randomColor())
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

