// NO CONSOLE.LOG


// isEven
// Write a function isEven() w/c takes a single numeric argument and returns true if the number is even, and false otherwise

// factorial
// write a function factorial() w/c takes a single numeric argument and returns the factorial of that number

// kebabToSnake()
// write a kebabToSnake() w/c takes a single kebab-cased string argument and returns the snake_cased version.



function isEven(num) {
	if (Number(num) % 2 === 0){
		return "true";
	}
	else if (Number(num) % 2 === 1){
		return "false";
	}
}

function factorial(num){
	for(var i = num; i > 2; i--){
		 var num = num * (i-1);
	}
	return num;
}

