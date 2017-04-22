// What would you like to do
// new
// 		enter a new todo
// 		asks what would you like to do
// list
// 		prints all todos
// 		asks again
// quit
//  	no prompt


var todo = [];
var start = question();

function question(start){
	var start = prompt("What would you like to do");
	return start;
}

while(start != "quit"){
	if(start == "new"){
		if (todo.length === 0){
			var todo = [prompt("enter a new todo")];
			console.log(todo[todo.length - 1] + " added to list");
			var start = question();
		}
		else {
			todo.push(prompt("Enter a new todo"));
			console.log(todo[todo.length - 1] + " added to list");
			var start = question();
		}
	}
	else if(start == "list"){
		console.log("***********");
		todo.forEach(function(list) {
			console.log(todo.indexOf(list) + ": " + list);
		});
		console.log("***********");
		var start = question();
	}
	else if(start == "delete"){
		var del = Number(prompt("Enter index of todo to delete"));
		todo.splice(del,1);
		console.log("Todo Removed");
		var start = question();
	}
	else {
		var start = question();
	}
}
console.log("OK, YOU QUIT THE APP!");






