/*
HOMEWORK #2
Write a function that will take an array of 5 numbers as an argument and return the sum.

Print it in the console or in alert

BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result.
*/

let numbers = [43, 68, 9, 15, 33, 49, 93];
let newNumbers = [64, 19, 72, 5, 86, 49, 33];
let mixedArray = [43, 68, 9, 15, "Bob Bobsky", 33, 49, 93];

function sumOfNumbers(numbers) {
	let totalNumber = 0;
	for (let i = 0; i < numbers.length; i++) {
		totalNumber += numbers[i];
	}
	return totalNumber;
}

console.log(`The result is ${sumOfNumbers(numbers)}`);

// BONUS

function sumOfValidatedNumbers(numbers) {
	for (let i = 0; i < numbers.length; i++) {
		if (typeof numbers[i] !== "number" || isNaN(numbers[i])) {
			console.log(
				"Invalid number detected at index " + i + ": " + numbers[i]
			);
			return;
		}
	}

	let totalNumber = 0;
	for (let i = 0; i < numbers.length; i++) {
		totalNumber += numbers[i];
	}
	console.log("The sum of the array is: " + totalNumber);
	return totalNumber;
}

sumOfValidatedNumbers(newNumbers);
sumOfValidatedNumbers(mixedArray);
