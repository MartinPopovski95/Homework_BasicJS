// Global variables
let randomWord = "";
let dashedWord = "";
let maxWrong = 6;
let mistakes = 0;

const alphabet = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

// Options for categories
const options = {
	topMovies: [
		"The Shawshank Redemption",
		"The Godfather",
		"The Dark Knight",
		"Pulp Fiction",
		"The Lord of the Rings: The Return of the King",
		"Forrest Gump",
		"Inception",
		"Fight Club",
		"The Matrix",
		"Interstellar",
		"Parasite",
		"Gladiator",
		"The Empire Strikes Back",
		"The Silence of the Lambs",
		"Saving Private Ryan",
		"Schindler's List",
		"The Green Mile",
		"Se7en",
		"The Prestige",
		"The Lion King",
		"Memento",
		"Terminator 2: Judgment Day",
		"Whiplash",
		"The Departed",
		"Joker",
		"Avengers: Endgame",
		"Spider-Man: Into the Spider-Verse",
		"Mad Max: Fury Road",
		"Titanic",
		"Avatar",
		"La La Land",
	],

	topTvShows: [
		"Breaking Bad",
		"Game of Thrones",
		"The Wire",
		"Stranger Things",
		"The Sopranos",
		"Sherlock",
		"The Crown",
		"Friends",
		"The Mandalorian",
		"Westworld",
		"Fargo",
		"Black Mirror",
		"The Office (US)",
		"Better Call Saul",
		"Rick and Morty",
		"The Simpsons",
		"Chernobyl",
		"House of Cards",
		"True Detective",
		"The Handmaid's Tale",
		"Succession",
		"Ozark",
		"Avatar: The Last Airbender",
		"Brooklyn Nine-Nine",
		"Dexter",
		"Lost",
		"Vikings",
		"The Witcher",
		"Severance",
		"Euphoria",
	],

	topGames: [
		"The Legend of Zelda",
		"Red Dead Redemption",
		"The Witcher",
		"God of War",
		"Elden Ring",
		"Grand Theft Auto",
		"Dark Souls",
		"Horizon",
		"Cyberpunk",
		"Persona",
		"Ghost of Tsushima",
		"Sekiro",
		"Bloodborne",
		"Uncharted",
		"Assassin's Creed",
		"Resident Evil",
		"Final Fantasy",
		"Control",
		"Death Stranding",
		"Spider-Man",
		"Doom",
		"Divinity: Original Sin",
		"Disco Elysium",
		"Hades",
		"Ori",
		"Mass Effect",
		"Star Wars Jedi",
		"Firewatch",
		"The Outer Worlds",
		"Celeste",
	],
};

// DOM Elements
const wordDisplay = document.getElementById("wordDisplay");
const hangmanImage = document.getElementById("hangmanImage");
const buttonContainer = document.getElementById("btn-container");
const mistakesSpan = document.getElementById("mistakes");
const maxWrongSpan = document.getElementById("maxWrong");
const playAgain = document.getElementById("resetBtn");

// Function to convert to dashes
function convertToDashes(word) {
	let dashes = "";
	for (let i = 0; i < word.length; i++) {
		if (
			word[i] === " " ||
			word[i] === "'" ||
			word[i] === ":" ||
			word[i] === "-"
		) {
			dashes += word[i];
		} else {
			dashes += "_";
		}
	}
	return dashes;
}

// Function to display random word from category
function displayRandomWord(category) {
	randomWord =
		options[category][Math.floor(Math.random() * options[category].length)];
	dashedWord = convertToDashes(randomWord);

	wordDisplay.textContent = dashedWord;
}

// Function to update hangman image
function updateHangmanImage() {
	hangmanImage.src = `assets/images/hangman-${mistakes}.svg`;
}

maxWrongSpan.textContent = maxWrong;

function checkLetterClick(letter) {
	let updatedDashedWord = "";
	let correctGuess = false;

	if (!randomWord) {
		alert("Please select a category to start the game");
		return;
	}

	// Check every letter in the word
	for (let i = 0; i < randomWord.length; i++) {
		if (randomWord[i].toUpperCase() === letter) {
			updatedDashedWord += randomWord[i];
			correctGuess = true;
		} else {
			updatedDashedWord += dashedWord[i];
		}
	}

	// Update dashedWord and display
	dashedWord = updatedDashedWord;
	wordDisplay.textContent = dashedWord;

	// Wrong guesses
	if (!correctGuess) {
		mistakes++;
		mistakesSpan.textContent = mistakes;
		updateHangmanImage();
		// update picture
		if (mistakes >= maxWrong) {
			wordDisplay.textContent = `The word you are looking for is: ${randomWord}`;
			updateHangmanImage();
			alert("Game over");
			hideAlphabetButtons();
			return;
		}
	}

	// Check for win
	if (dashedWord === randomWord) {
		alert("Congratulations");
		hideAlphabetButtons();
		// resetGame();
	}
}

function showAlphabetButtons() {
	buttonContainer.style.display = "flex";
}

function hideAlphabetButtons() {
	buttonContainer.style.display = "none";
}

// Create the buttons
function createButtonAlphabet(disable = true) {
	buttonContainer.innerHTML = "";

	for (let i = 0; i < alphabet.length; i++) {
		let button = document.createElement("button");
		button.setAttribute("class", "btn-alphabet");
		button.textContent = alphabet[i];
		button.addEventListener("click", function () {
			checkLetterClick(button.textContent);
			button.setAttribute("disabled", true);
			button.style.backgroundColor = "#ccc";
			button.style.color = "#51513D";
		});
		buttonContainer.appendChild(button);
	}

	if (disable) {
		hideAlphabetButtons();
	} else {
		showAlphabetButtons();
	}
}

// Function to reset the game
function resetGame() {
	randomWord = "";
	dashedWord = "";
	mistakes = 0;
	wordDisplay.textContent = "";
	mistakesSpan.textContent = mistakes;
	createButtonAlphabet(true);
	updateHangmanImage();
}

// Event listeners for categories
document.getElementById("movies-btn").addEventListener("click", function () {
	resetGame();
	displayRandomWord("topMovies");
	createButtonAlphabet(false);
});
document.getElementById("tv-shows-btn").addEventListener("click", function () {
	resetGame();
	displayRandomWord("topTvShows");
	createButtonAlphabet(false);
});
document.getElementById("games-btn").addEventListener("click", function () {
	resetGame();
	displayRandomWord("topGames");
	createButtonAlphabet(false);
});

playAgain.addEventListener("click", function () {
	resetGame();
	hideAlphabetButtons();
});
