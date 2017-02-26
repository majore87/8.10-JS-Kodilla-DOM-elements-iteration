var elements = document.getElementsByClassName('button');

var numberOfElements = elements.length;
console.log(numberOfElements);

for (i = 0; i < numberOfElements; i++) {
	var buttonText = elements[i].innerText;
	console.log(buttonText);
}