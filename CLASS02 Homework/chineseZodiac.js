let input = prompt("Enter a year of birth:");

let chineseZodiacFormula = (input - 4) % 12;
let parsedIntValue = parseInt(chineseZodiacFormula);

if (parsedIntValue >= 0 && parsedIntValue < 1) {
    console.log("You are a Rat in Chinese Zodiac");
} else if (parsedIntValue >= 1 && parsedIntValue < 2) {
    console.log("You are an Ox in Chinese Zodiac");
} else if (parsedIntValue >= 2 && parsedIntValue < 3) {
    console.log("You are a Tiger in Chinese Zodiac");
} else if (parsedIntValue >= 3 && parsedIntValue < 4) {
    console.log("You are a Rabbit in Chinese Zodiac");
} else if (parsedIntValue >= 4 && parsedIntValue < 5) {
    console.log("You are a Dragon in Chinese Zodiac");
} else if (parsedIntValue >= 5 && parsedIntValue < 6) {
    console.log("You are a Snake in Chinese Zodiac");
} else if (parsedIntValue >= 6 && parsedIntValue < 7) {
    console.log("You are a Horse in Chinese Zodiac");
} else if (parsedIntValue >= 7 && parsedIntValue < 8) {
    console.log("You are a Goat in Chinese Zodiac");
} else if (parsedIntValue >= 8 && parsedIntValue < 9) {
    console.log("You are a Monkey in Chinese Zodiac");
} else if (parsedIntValue >= 9 && parsedIntValue < 10) {
    console.log("You are a Rooster in Chinese Zodiac");
} else if (parsedIntValue >= 10 && parsedIntValue < 11) {
    console.log("You are a Dog in Chinese Zodiac");
} else if (parsedIntValue >= 11 && parsedIntValue < 12) {
    console.log("You are a Pig in Chinese Zodiac");
} else {
    console.log("Invalid input");
}
