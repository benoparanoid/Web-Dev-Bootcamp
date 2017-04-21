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
			var start = question();
		}
		else {
			todo.push(prompt("Enter a new todo"));
			var start = question();
		}
	}
	else if(start == "list"){
		console.log(todo);
		var start = question();
	}
	else {
		var start = question();
	}
}

