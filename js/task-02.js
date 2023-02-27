const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// const ulRef = document.createElement("li");
// ingredients.map((name) => {
//  const liRef = document.createElement('li');
// liRef.textContent = name;
// ulRef.appendChild(liRef);
// });
//  console.log(ulRef);
 

 function createItemsMarkup(ingredients) {
  return ingredients.map((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add("item");
    return li;
  });
}
const ingredientsListRef = document.getElementById("ingredients");
ingredientsListRef.append(...createItemsMarkup(ingredients));

console.log(createItemsMarkup(ingredients));

console.dir(document);