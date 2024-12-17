/*
Homework #5
Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14

Bonus: Try making the function work if there are other types of items in it
*/

let numbers = [3, 5, 6, 8, 11];

function findMinMax(inputArray) {
	let min = inputArray[0];
	let max = inputArray[0];
	for (let i = 0; i < inputArray.length; i++) {
		if (max < inputArray[i]) {
			max = inputArray[i];
		}
		if (min > inputArray[i]) {
			min = inputArray[i];
		}
		sumMaxMin = max + min;
	}
	console.log(`Max: ${max} Min: ${min} Sum: ${sumMaxMin}`);
	return { min, max, sumMaxMin };
}

console.log(findMinMax(numbers));

// BONUS

let mixedArray = [6, "Martin", 7, true, 9, 14, null, 22, "Dona"];

function findMinMax(inputArray) {
	let min = null;
	let max = null;
	let sumMaxMin = null;

	for (let i = 0; i < inputArray.length; i++) {
		let currentItem = inputArray[i];

		if (typeof currentItem !== "number") {
			continue;
		} else {
			if (min === null && max === null) {
				min = currentItem;
				max = currentItem;
			} else {
				if (currentItem > max) {
					max = currentItem;
				}
				if (currentItem < min) {
					min = currentItem;
				}
			}
		}
	}
	if (min !== null && max !== null) {
		sumMaxMin = min + max;
		console.log(`Max: ${max} Min: ${min} Sum: ${sumMaxMin}`);
	} else {
		console.log("No numeric values found!");
	}
	return { min, max, sumMaxMin };
}

console.log(findMinMax(mixedArray));
