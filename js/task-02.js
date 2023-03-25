const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newLi = document.createElement('li');
newLi.textContent = ingredients;
newLi.classList.add('item');

const navEl = document.querySelector('#ingredients');
navEl.appendChild(newLi);
console.log(navEl);
