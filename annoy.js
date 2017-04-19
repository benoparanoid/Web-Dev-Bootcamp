
var answer = prompt("Are we there yet");


// var count = 1;

// while(count === 1) {
// 	if((answer == "yes") || (answer == "yeah")) {
// 		alert("Yay, we finally made it!");
// 		count++;
// 	}
// 	else {
// 		var answer = prompt("Are we there yet");
// 	}
// }



// while(answer !== "yes" && answer !== "yeah") {
// 	var answer = prompt("Are we there yet?");
// }
// alert("Yay, we finally made it!");



while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
	var answer = prompt("Are we there yet?");
}
alert("Yay, we finally made it!");