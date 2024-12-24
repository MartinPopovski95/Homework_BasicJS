/* HOMEWORK Part 1
Change the page with JavaScript

Change the text of all paragraphs and headers with javascript
Note:The html must not be changed */

// Changing the title
let myTitle = document.getElementById("myTitle");
myTitle.textContent = "HOMEWORK Part 1 - Change the page with JavaScript";

// Changing the first paragraph
let paragraphFirst = document.querySelector(".paragraph");
paragraphFirst.textContent = "DOM manipulation is an essential tool";

// Changing the second paragraph
let paragraphSecond = document.querySelector(".second");
paragraphSecond.textContent =
	"You can work around with HTML elements without even touching the HTML document";

// Changing the text in the text element
let textElement = document.getElementsByTagName("text");
textElement[0].textContent += " manipulating them";

// Changing the h1 in the third div
let DivElements = document.getElementsByTagName("div");
DivElements[2].setAttribute("id", "thirdDiv");
let thirdDiv = document.getElementById("thirdDiv");
thirdDiv.firstElementChild.textContent = "Practice makes perfect";
// Changing the h3 in the third div
thirdDiv.lastElementChild.textContent = "Just keep going!";

// Another way
/* let thirdDiv = document.getElementsByTagName("div");
thirdDiv[2].children[0].textContent = "Practice makes perfect";
// Changing the h3 in the third div
thirdDiv[2].children[1].textContent = "Just keep going!"; */
