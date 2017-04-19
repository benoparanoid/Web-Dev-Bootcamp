//create secret number
// ask user for guess

// check guess too low or too high


var secretNumber = Number(4);
var guessNumber = Number(prompt("Guess a number!"));

if (guessNumber === secretNumber) {
	alert("You guessed it!!!")
}

else if (guessNumber > secretNumber) {
	alert("Too high. Try Again");
}
else if (guessNumber < secretNumber) {
	alert("Too low. Try Again")
}

else {
	alert("Invalid!!!")
}
