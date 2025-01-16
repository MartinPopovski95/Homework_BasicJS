const singleDigits = [
	"",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine",
];

const teens = [
	"ten",
	"eleven",
	"twelve",
	"thirteen",
	"fourteen",
	"fifteen",
	"sixteen",
	"seventeen",
	"eighteen",
	"nineteen",
];

const tens = [
	"",
	"",
	"twenty",
	"thirty",
	"forty",
	"fifty",
	"sixty",
	"seventy",
	"eighty",
	"ninety",
];

const scale = ["", "thousand", "million"];

function convertHundreds(number) {
	let words = "";

	const hundreds = parseInt(number / 100, 10);
	let remainingNumber = number % 100;

	if (hundreds > 0) {
		words += singleDigits[hundreds] + " hundred";
		if (remainingNumber > 0) {
			words += " and ";
		}
	}

	if (remainingNumber >= 10 && remainingNumber < 20) {
		words += teens[remainingNumber - 10];
	} else if (remainingNumber >= 20) {
		const tensDigit = parseInt(remainingNumber / 10, 10);
		const onesDigit = remainingNumber % 10;

		words += tens[tensDigit];
		if (onesDigit > 0) {
			words += "-" + singleDigits[onesDigit];
		}
	} else if (remainingNumber > 0 && remainingNumber < 10) {
		words += singleDigits[remainingNumber];
	}

	return words;
}

function convertNumberToWords(number) {
	if (number === 0) {
		return "Zero";
	}

	if (number === 1000000) {
		return "One Million";
	}

	if (number < 0) {
		return "minus " + convertNumberToWords(-number);
	}

	let scaleIndex = 0;
	let words = "";

	while (number > 0) {
		const currentThreeDigits = number % 1000;
		if (currentThreeDigits !== 0) {
			const partialWords = convertHundreds(currentThreeDigits);

			if (partialWords) {
				if (scale[scaleIndex]) {
					words =
						partialWords + " " + scale[scaleIndex] + " " + words;
				} else {
					words = partialWords + " " + words;
				}
			}
		}
		number = parseInt(number / 1000, 10);
		scaleIndex++;
	}

	return words.trim();
}

const inputArea = document.getElementById("input-area");
const displayArea = document.getElementById("display-area");

inputArea.addEventListener("input", () => {
	const inputValue = inputArea.value.trim();

	if (isNaN(inputValue)) {
		displayArea.value = "Please enter a valid number!";
		return;
	}

	const number = parseInt(inputValue, 10);

	if (number < -1000000 || number > 1000000) {
		displayArea.value = "Number must be between -1.000.000 and 1.000.000";
		return;
	}

	const words = convertNumberToWords(number);
	displayArea.value = words;
});
