/* HOMEWORK Part 1

Create a greeting app with JQuery
Create an input
Create a button
When clicked the button should print a greet message in an h1 header
Ex: input: Petko output message: Hello there Petko!

You must use JQuery to complete the task */

$(document).ready(function () {
	let inputForm = $("#input-form");
	let result = $("#result");

	function greetMessage(name) {
		return `Hello there ${name}!`;
	}

	$("button").click(function () {
		let userInput = inputForm.val().trim();

		if (isNaN(userInput)) {
			result.text(greetMessage(userInput));
		} else {
			result.text(`Not a valid input!`);
		}
	});
});
