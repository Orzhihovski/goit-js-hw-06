const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");
const result = ingredients.map((item, index) => {
  const Item = document.createElement("li");
  Item.textContent = ingredients[index];
  Item.classList.add("item");
  return Item;
});
listIngredients.append(...result);