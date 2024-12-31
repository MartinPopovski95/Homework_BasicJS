/* HOMEWORK Part 2
Create a header generator

Create two inputs, one for text and one for color
Create a button that says: generate h1
When the button is clicked create a new header below the inputs and button
The new header should have the text and color from the inputs
Additionally create an h3 element for messages
If the person enters an invalid color or an empty text show an error message in the h3 element
 You must use JQuery to complete the task */

$(document).ready(function () {
	let textInput = $("#textInput");
	let colorInput = $("#colorInput");
	let generateBtn = $("button");

	let errorMessage = $("<h3>").attr("id", "errorMessage").css("color", "red");
	$("body").append(errorMessage);

	generateBtn.click(function () {
		errorMessage.text("");

		let userInputText = textInput.val();
		let userInputColor = colorInput.val();

		if (!userInputText) {
			errorMessage.text("Error: Text cannot be empty!");
			return;
		}
		if (!userInputColor) {
			errorMessage.text("Error: Color cannot be empty!");
			return;
		}

		if (!isValidColor(userInputColor)) {
			errorMessage.text("Error: Invalid color!");
			return;
		}

		let newHeader = $("<h1>")
			.text(userInputText)
			.css("color", userInputColor);

		$("body").append(newHeader);
	});

	function isValidColor(color) {
		let tempElement = new Option().style;
		tempElement.color = color;
		return tempElement.color === color.toLowerCase();
	}
});
