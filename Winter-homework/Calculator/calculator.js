const displayMain = document.querySelector(".display__main");
const displayHistory = document.querySelector(".display__history");
const keys = document.querySelectorAll("button");

let currentInput = "";
let storedValue = null;
let operator = null;
let result = null;
let shouldReset = false;
let errorOccurred = false;

for (let i = 0; i < keys.length; i++) {
	keys[i].addEventListener("click", function () {
		const keyValue = keys[i].value;

		if (errorOccurred && keyValue !== "clear") {
			currentInput = "";
			storedValue = null;
			operator = null;
			shouldReset = false;
			errorOccurred = false;
			displayHistory.textContent = "";
			displayMain.textContent = "0";
		}

		if (!isNaN(parseInt(keyValue))) {
			if (shouldReset) {
				currentInput = "";
				storedValue = "";
				operator = null;
				displayHistory.textContent = "";
				displayMain.textContent = "0";
				shouldReset = false;
			}

			if (currentInput === "0") {
				currentInput = keyValue;
			} else {
				currentInput += keyValue;
			}
			displayMain.textContent = currentInput;
		} else if (
			keyValue === "-" &&
			currentInput === "" &&
			storedValue === null &&
			operator === null
		) {
			currentInput = "-";
			displayMain.textContent = currentInput;
		} else if (keyValue === ".") {
			if (shouldReset) {
				currentInput = "";
				storedValue = "";
				operator = null;
				displayHistory.textContent = "";
				displayMain.textContent = "0";
				shouldReset = false;
			}
			if (!currentInput.includes(".")) {
				if (currentInput === "") {
					currentInput = "0.";
				} else {
					currentInput += ".";
				}
				displayMain.textContent = currentInput;
			}
		} else if (
			keyValue === "+" ||
			keyValue === "-" ||
			keyValue === "*" ||
			keyValue === "/"
		) {
			if (currentInput === "") {
				operator = keyValue;
				displayHistory.textContent = storedValue + " " + operator;
				displayMain.textContent = operator;
				return;
			}
			operator = keyValue;
			storedValue = parseFloat(currentInput);
			currentInput = "";
			displayHistory.textContent = storedValue + " " + operator;
			displayMain.textContent = operator;
			shouldReset = false;
		} else if (keyValue === "equals") {
			if (operator && storedValue !== null && currentInput !== "") {
				let result = 0;
				const secondValue = parseFloat(currentInput);
				if (operator === "/" && secondValue === 0) {
					displayMain.textContent = "Error";
					displayHistory.textContent = "Error";
					errorOccurred = true;

					currentInput = "";
					storedValue = null;
					operator = null;
					shouldReset = false;
					return;
				}

				switch (operator) {
					case "+":
						result = storedValue + parseFloat(currentInput);
						break;
					case "-":
						result = storedValue - parseFloat(currentInput);
						break;
					case "*":
						result = storedValue * parseFloat(currentInput);
						break;
					case "/":
						result = storedValue / parseFloat(currentInput);
						break;
				}
				if (result > 1000000000 || result < -1000000000) {
					displayMain.textContent = "Error: Big number";
					displayHistory.textContent = "Error";
					errorOccurred = true;

					currentInput = "";
					storedValue = null;
					operator = null;
					shouldReset = false;
					return;
				}

				displayHistory.textContent =
					storedValue + " " + operator + " " + currentInput;
				displayMain.textContent = result;

				shouldReset = true;

				currentInput = result.toString();
				storedValue = null;
				operator = null;
			}
		} else if (keyValue === "clear") {
			currentInput = "";
			storedValue = null;
			operator = null;
			displayMain.textContent = 0;
			displayHistory.textContent = "";
			shouldReset = false;
		} else if (keyValue === "delete") {
			if (shouldReset) {
				currentInput = "";
				storedValue = null;
				operator = null;
				displayMain.textContent = 0;
				displayHistory.textContent = "";
				shouldReset = false;
			} else {
				currentInput = currentInput.slice(0, -1);
				displayMain.textContent = currentInput || 0;
			}
		}
	});
}
