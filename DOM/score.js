/***Adding event for button 1 or player 1****/
	var player1 = document.getElementById("p1");
	var score1 = document.querySelectorAll("span")[0];
	var winningScore=5;
	var gameOver = false;

	player1.addEventListener("click",incrementScore1);

	function incrementScore1(){

		if(!gameOver && score1.textContent < winningScore){
		score1.textContent++;

			if(Number(score1.textContent) === winningScore){
					score1.style.color = "green";
					//Instead you can also do classList as below
					//score1.classList.add("winner");
					//Add winner in span as span class="winner" and in css file
					// change the color of winner class.
					gameOver = true;
		}
	}

		//why the below wont work
		//score1.textContent += 1;

	}

/**Adding event for button 2 or player 2**/

var player2 = document.getElementById("p2");
	var score2 = document.querySelectorAll("span")[1];

	player2.addEventListener("click",incrementScore2);

	function incrementScore2(){
		if(!gameOver && score2.textContent < winningScore){
		score2.textContent++;
		
			if(Number(score2.textContent) === winningScore){
				score2.style.color = "green";
				gameOver = true;
			}
	}

		//why the below wont work
		//score2.textContent += 1;

	}

	/*** Resetting the values ..event on Reset *********/

	var reset = document.querySelectorAll("button")[2];

	reset.addEventListener("click",clearAll);

	function clearAll(){
		score1.textContent = 0;
		score2.textContent = 0;
		score1.style.color = "black";
		score2.style.color = "black";
		gameOver=false;//if you really want to end the game if you click reset ..and start a fresh one.
	}

	/*** Playing To value changes ..you can set your winning score.*********/

	var numInput = document.querySelector("input[type = 'Number']");

	var setScore = document.querySelector("p span");

	

	numInput.addEventListener("change",function(){
		/*setScore.textContent = numInput.value;
		winningScore = Number(numInput.value);*/
		//change to "this"

		setScore.textContent = this.value;
		winningScore = Number(this.value);
		clearAll();
	});

	
