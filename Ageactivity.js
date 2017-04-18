if age is negative
	print an error message

if age is 21
	print "happy 21st birthday!!"

if age is odd
	print "your age is odd!"

if age is a perfect square,
	print perfect square!


var age = Number(prompt("What is your age?"));

if (age < 0) {
	console.log("Number is invalid!");
}

else if (((age % 2) === 1) && (age === 21) ) {
	console.log("Your age is odd!");
	console.log("happy 21st Birthday!");
}
else if (age % 2 === 1 ) {
	console.log("Your age is odd!");	
}

else if (1 * 1 === age || 2 * 2 === age || 3 * 3 === age ||4 * 4 === age || 5 * 5 === age ||6*6 === age || 7*7 === age || 8*8 === age || 9*9 === age || 10*10 === age ) {
		console.log("perfect square!");
}
else {
	console.log("Your age is " + age);
}




