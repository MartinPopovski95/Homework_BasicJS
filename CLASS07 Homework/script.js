/* Homework
Create a dynamic table
Write a Javascript function that will dynamically create a table
User should input the number of Columns and Rows
In every table cell print which row and column it is (ex. Row-3 Column-1)
Don't forget to use google! :) */

function generateTable() {
	let tableContainer = document.getElementById("table-container");
	const rowsInput = document.getElementById("rows");
	const colsInput = document.getElementById("cols");

	let rows = parseInt(rowsInput.value);
	let cols = parseInt(colsInput.value);

	tableContainer.innerHTML = "";

	let table = document.createElement("table");
	for (let i = 0; i < rows; i++) {
		let tRows = document.createElement("tr");

		for (let j = 0; j < cols; j++) {
			let tData = document.createElement("td");
			tData.textContent = `Row ${i + 1}, Column ${j + 1}`;
			tRows.appendChild(tData);
		}

		table.appendChild(tRows);
	}

	tableContainer.appendChild(table);
}

let buttonTable = document.getElementById("btn-generateTable");
buttonTable.addEventListener("click", generateTable);
