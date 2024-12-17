/*
HOMEWORK #1
Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert
*/

let storyArguments = ["Dona", "cheerful", "reading books"];

function tellStory(storyArguments) {
    return `This is ${storyArguments[0]}. ${storyArguments[0]} is a nice person. Today they are ${storyArguments[1]}. They are ${storyArguments[2]} all day. The end.`;
}

console.log(tellStory(storyArguments));
alert(tellStory(storyArguments));
