const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const items = ingredients.reduce((acc,ingredient)=>{
  const li = document.createElement("li");
  li.textContent = ingredient;
  acc.push(li);
  return acc;
}, []);

document.getElementById("ingredients").append(...items);