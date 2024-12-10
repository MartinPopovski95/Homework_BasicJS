/*
HOMEWORK Part 1
Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types:

object
boolean
number
string
undefined
*/

function typeOfParameter(dataType) {
    console.log(typeof dataType);
}

typeOfParameter(null);
typeOfParameter(false);
typeOfParameter(1995);
typeOfParameter("Martin");
typeOfParameter();
