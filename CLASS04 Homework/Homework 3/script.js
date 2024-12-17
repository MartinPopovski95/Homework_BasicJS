/*
HOMEWORK #3
Write a javascript function that:
When given any array of strings (should work with array with any number of elements)
It will create one big string and return it
Ex:["Hello", "there", "students", "of", "SEDC", "!"]
Result: "Hello there students of SEDC!"
*/

let stringElements = ["Hello", "there", "students", "of", "SEDC", "!"];

function arrayToSentence(arrayOfElements) {
	let result = "";
	for (let i = 0; i < arrayOfElements.length; i++) {
		if (
			i === arrayOfElements.length - 1 &&
			(arrayOfElements[i] === "." ||
				arrayOfElements[i] === "!" ||
				arrayOfElements[i] === "?")
		) {
			result = result.trim() + arrayOfElements[i];
		} else {
			result += arrayOfElements[i] + " ";
		}
	}
	return result.trim();
}

console.log(arrayToSentence(stringElements));
