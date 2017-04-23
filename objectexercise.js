// Objectexercise

// create an array of movie objects. Each movie should have a title, rating, and has watched properties. Iterate through the array and print out something that looks like:

// You have watched "In Bruges" - 5 stars
// You have not seen "Frozen" - 4.5 stars
// You have seen "Mad Max Fury Road" - 5 stars
// You have not seen "Les Miserables" - 3.5 stars



var movieDB = [
	{
	name: "Frozen",
	seen: "seen",
	stars: 5
	},
	{
	name: "Moana",
	seen: "seen",
	stars: 4
	},
	{
	name: "Resident Evil",
	seen: "not seen",
	stars: 3.5
	},
	{
	name: "Power Rangers",
	seen: "seen",
	stars: 4.5
	}
];




for(i = movieDB.length-1; i>0; i--){
	console.log("You have " + movieDB[i].seen + " \"" + movieDB[i].name + "\" - " + movieDB[i].stars + " stars" );
};