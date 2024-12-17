/*
Homework #6
Title: Looping structures

Description:Write a javascript function that:
When given 2 arrays of students firstNames and lastNames will return a new array with students full names
Every name should have a numeric value before it
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
*/

let firstName = ["Bob", "Jill", "Bob", "Martin", "Arnold"];
let lastName = ["Gregory", "Wurtz", "Bobsky", "Popovski", "Schwarzenegger"];

function fullName(firstName, lastName) {
	let fullName = [];
	let numericValue = 0;

	for (i = 0; i < firstName.length; i++) {
		numericValue++;
		fullName.push(i + 1 + ". " + firstName[i] + " " + lastName[i]);
	}
	return fullName;
}

console.log(fullName(firstName, lastName));
