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
	var num = Number(num);
	if(num === 0) {
		var num = 1;
		return num;
	}
	else {
		for(var i = num; i > 2; i--){
			var num = num * (i-1);				//num *= i;
		}
		return num;
	}
}


function kebabToSnake(str) {
	while (Number(str.indexOf("-")) !== -1){
		var str = str.replace("-","_");
	}
	return str;
}


function kebabToSnake(str) {
	var str = str.replace(/-/g,"_");
	return str;
}