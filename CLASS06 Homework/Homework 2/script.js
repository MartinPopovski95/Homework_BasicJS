/* HOMEWORK Part 2
Print all numbers from an array and the sum

Create an array with numbers
Print all numbers from the array in a list element, in the HTML page
Print out the sum of all of the numbers below the list
Bonus: Try printing the whole mathematical equation as well ( 2 + 4 + 5 = 11) */

let divContainer = document.getElementById("list-container");
let numArray = [53, 21, 4, 65, 19, 22];
let secondNumArray = [82, 11, 156, 35, 28, 2];

function renderNumbersAndSum(numberArray, container) {
	container.innerHTML = "";
	let sumOfNum = 0;
	let mathEquation = "";

	let numbersContent = "<ul>";

	for (let i = 0; i < numberArray.length; i++) {
		if (i !== numberArray.length - 1) {
			numbersContent += `<li>${numberArray[i]}</li>`;
			sumOfNum += numberArray[i];
			mathEquation += numberArray[i] + "+";
		} else {
			numbersContent += `<li>${numberArray[i]}</li>`;
			sumOfNum += numberArray[i];
			mathEquation += numberArray[i] + "";
		}
	}
	numbersContent += "</ul>";
	container.innerHTML =
		numbersContent +
		`<p>Sum of all the numbers in the array is: ${sumOfNum}</p>` +
		`<p>Mathematical equation is: ${mathEquation} = ${sumOfNum}</p>`;
}

renderNumbersAndSum(numArray, divContainer);
// renderNumbersAndSum(secondNumArray, divContainer);
