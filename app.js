

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
