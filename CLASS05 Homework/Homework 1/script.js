/* 
HOMEWORK Part 1

Create OBJECT animal with 2 properties and 1 method:
name
kind
speak (method)
this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

Bonus: enter the values from prompt 
*/

let dog = {
	name: "Aston",
	kind: "Lagotto Romagnolo",
	speak: function (wordsOfWisdom) {
		console.log(
			`Dog says: ${wordsOfWisdom} my name is ${dog.name} and I am ${dog.kind}`
		);
	},
};

dog.speak("hey bro!!!");
let wordsOfWisdom = prompt("What do you want your dog to say?");

dog.speak(wordsOfWisdom);
