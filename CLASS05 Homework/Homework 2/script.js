/* 
HOMEWORK Part 2
Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

Already read 'The Robots of dawn' by Isaac Asimov. (if true)
You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
Bonus: enter the values from prompt() 
*/

let readingStatusInput = prompt("Have you read the book? (true/false)");
let readingStatus = readingStatusInput === "true";

let book = {
	title: readingStatus
		? "The Robots of dawn"
		: "Mockingjay: The Final Book of The Hunger Games",
	author: readingStatus ? "Isaac Asimov" : "Suzanne Collins",
	readingStatus: readingStatus,
	getInfo: function () {
		if (this.readingStatus) {
			return `Already read ${this.title} by ${this.author}.`;
		} else {
			return `You still need to read ${this.title} by ${this.author}.`;
		}
	},
};

console.log(book.getInfo());
