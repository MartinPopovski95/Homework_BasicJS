/*
Student Exercise - #3
The Age Calculator
Forgot how old you are? Calculate it!

Write a function named calculateAge that:
takes 2 arguments: birth year, current year.
calculates the age based on those years.
outputs the result to the screen like so: "You are NN years old"
Call the function three times with different sets of values.
Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
*/

console.log("======== Function with two arguments =========");
function calculateAge(birthYear, currentYear) {
    if (typeof birthYear === "number" && typeof currentYear === "number") {
        if (birthYear < 1900) {
            console.log("You are too old to calculate");
        } else if (birthYear > currentYear) {
            console.log("You are not born yet!");
        } else if (birthYear >= 1900 && birthYear <= currentYear) {
            let resultAge = currentYear - birthYear;
            console.log(`You are ${resultAge} years old`);
        }
    } else {
        console.log("Invalid input, please enter a number");
    }
}

calculateAge(2000, 2022);
calculateAge(1999, 2013);
calculateAge(2026, 2024);
calculateAge(1630, 2024);
calculateAge(true, "Martin");

console.log("");
console.log("======== BONUS: Function with current year =========");

function calculateAgeBonus(birthYear) {
    let currentYear = new Date().getFullYear();
    if (typeof birthYear === "number") {
        if (birthYear >= 1900 && birthYear <= currentYear) {
            let resultAge = currentYear - birthYear;
            console.log(`You are ${resultAge} years old`);
        } else if (birthYear < 1900) {
            console.log("You are too old to calculate");
        } else if (birthYear > currentYear) {
            console.log("You are not born yet!");
        }
    } else {
        console.log("Invalid input, please enter a number");
    }
}

calculateAgeBonus(1999);
calculateAgeBonus(1995);
calculateAgeBonus(2026);
calculateAgeBonus(1630);
calculateAgeBonus("Martin");
