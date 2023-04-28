/* const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn')
const color = document.querySelector('.color') 

btn.addEventListener('click' , () => {
  let hexColor = '#'
  for (let i = 0; i < 6; i++) {
   hexColor += hex[getRandomNumber()]

   color.textContent = hexColor
   document.body.style.backgroundColor = hexColor
  }
})

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length)
} */

/* const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const hexColor = generateHexColor(hexValues);
  setColor(hexColor);
});

function generateHexColor(hexValues) {
  const hexColor = ['#'];
  for (let i = 0; i < 6; i++) {
    hexColor.push(hexValues[getRandomNumber(hexValues)]);
  }
  return hexColor.join('');
}

function setColor(hexColor) {
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}

function getRandomNumber(hexValues) {
  return Math.floor(Math.random() * hexValues.length);
} */

/* 

// Como lo haria un programador JavScript con 30 años de experiencia


// Use a more descriptive name for the array of hex characters
const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

// Cache the DOM elements for performance
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const body = document.body;

// Use the addEventListener() method instead of setting the onclick property
btn.addEventListener('click', () => {
  const hexColor = generateHexColor(hexChars);
  setColor(hexColor);
});

// Use const instead of let for variables that won't be reassigned
const generateHexColor = (hexChars) => {
  let hexColor = '#';
  // Use a more descriptive name for the loop variable
  for (let i = 0; i < 6; i++) {
    hexColor += hexChars[getRandomIndex(hexChars)];
  }
  return hexColor;
};

// Use const instead of let for variables that won't be reassigned
const setColor = (hexColor) => {
  color.textContent = hexColor;
  // Use a more descriptive property name and use the body variable for performance
  body.style.backgroundColor = hexColor;
};

// Use a more descriptive function name
const getRandomIndex = (hexChars) => {
  // Use bitwise operator instead of Math.floor() for performance
  return ~~(Math.random() * hexChars.length);
};  */


// Como lo haría el mejor programador JS del mundo 

const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
  const hexColor = generateHexColor(hexValues);
  setColor(hexColor);
});

function generateHexColor(hexValues) {
  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    hexColor += getRandomChar(hexValues);
  }
  return hexColor;
}

function setColor(hexColor) {
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
}

function getRandomChar(hexValues) {
  const randomIndex = Math.floor(Math.random() * hexValues.length);
  return hexValues[randomIndex];
}