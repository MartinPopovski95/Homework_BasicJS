/* BONUS HOMEWORK
Create a recipe page from inputs

Ask the user for the name of the recipe
Ask the user how many ingredients do we need for the recipe
Ask the user for the name of every ingredient
Print the name of the recipe in the HTML as heading element, ex: h1-h6
Print all ingredients as an unordered list in the HTML
Extra: Use a table if you want to be fancy :) */

function createRecipePage() {
	let recipeName = prompt("Please provide the name of the recipe");

	let numIngredients = parseInt(
		prompt("How many ingredients do we need for the recipe?")
	);

	while (isNaN(numIngredients) || numIngredients <= 0) {
		numIngredients = parseInt(
			prompt("Please enter a valid positive number")
		);
		break;
	}

	let ingredients = [];

	for (let i = 1; i <= numIngredients; i++) {
		let ingredient = prompt(`Enter the name of ingredient ${i}:`);
		if (!ingredient) {
			ingredient = `ingredient ${i}`;
		}
		ingredients.push(ingredient);
	}

	const heading = document.createElement("h1");
	heading.textContent = "BONUS HOMEWORK - Create a recipe page from inputs";

	const table = document.createElement("table");
	const caption = document.createElement("caption");
	caption.textContent = recipeName;

	const thead = document.createElement("thead");
	const headerRow = document.createElement("tr");
	const th1 = document.createElement("th");
	th1.textContent = "No. of Ingredients";
	const th2 = document.createElement("th");
	th2.textContent = "Ingredient Name";

	headerRow.appendChild(th1);
	headerRow.appendChild(th2);
	thead.appendChild(headerRow);
	table.appendChild(thead);

	const tbody = document.createElement("tbody");
	for (let i = 0; i < ingredients.length; i++) {
		const ingredient = ingredients[i];
		const row = document.createElement("tr");

		const cell1 = document.createElement("td");
		cell1.textContent = i + 1;

		const cell2 = document.createElement("td");
		cell2.textContent = ingredient;
		row.appendChild(cell1);
		row.appendChild(cell2);
		tbody.appendChild(row);
	}
	table.appendChild(tbody);

	const container = document.getElementById("recipe-container");
	table.appendChild(caption);
	container.appendChild(heading);
	container.appendChild(table);
}

createRecipePage();
