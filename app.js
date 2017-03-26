

const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
  let myColor = myTextInput.value;
  myHeading.style.color = myColor;
});

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i++) {
  myList[i].style.color = 'purple';
}

const errorList = document.getElementsByClassName("error-not-purple");

for (let i = 0; i < errorList.length; i++) {
  errorList[i].style.color = 'red';
}

const evens = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < evens.length; i++) {
  evens[i].style.backgroundColor = 'lightblue';
}
