// Write a function

// printReverse()
// -Takes an array as an argument and prints out the array in reverse

function printReverse(array){
	var length = array.length;
	while(length > 0){
		console.log(array[length-1]);
		length--;
	}
};

// isUniform()
// -takes an array as an argument and returms true if all elements in array are identical

function isUniform(uniform){
	var first = uniform.length-1;

	while (uniform[0] == uniform[first]){
		if (first != 0){
		first--;
		}
		else if (first == 0){
			console.log("true");
			var first = Number(-1);
		}
	}
	if (uniform[0] != uniform[first] && first != -1) {
		console.log("false");
	}
}

// sumArray()
// -accepts an aray of numbers and returns the sum of all numbers in the array

function sumArray(num){
	var length = num.length;
	var x = 0;
	for (var i = length; i > 0; i--){
		var x = x + num[i-1];
	}
	console.log(x);
}

// max()
// -returns the maximum number in the array

function max(array){
	var num1 = array.length
	var max = array[num1-1]

	for(var i = num1-1; i > 0; i--){
		if ( max >= array[i]){
			var max = max;
		}
		else {
			var max = array[i];
		}
	}
	console.log(max);
}