/*
HOMEWORK Part 2
Write a JavaScript function that will return:

Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
Note: Call the function in console to see answer
Bonus: Make the same function work for converting dog to human years as well
*/

function dogAgeCalculator(age, typeOfCalculation) {
    if (typeOfCalculation === "humanToDog") {
        return `${age} human years is ${age * 7} dog years`;
    } else if (typeOfCalculation === "dogToHuman") {
        return `${age} dog years is ${age / 7} human years`;
    } else {
        return "Please specify the type of conversion";
    }
}

console.log(dogAgeCalculator(7, "humanToDog"));
console.log(dogAgeCalculator(56, "dogToHuman"));
console.log(dogAgeCalculator(56, "Martin"));
