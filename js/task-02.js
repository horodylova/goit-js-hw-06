const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
//два варианта решения 

const ulRef = document.createElement('ul');

const liListRef = ingredients.map(ingredient => {
  const liRef = document.createElement('li');
  liRef.textContent = ingredient;
  liRef.classList.add("item")
  
  return liRef;
});
ulRef.append(...liListRef)
console.log(ulRef);

document.body.append(ulRef);


 

//  function createItemsMarkup(ingredients) {
//   return ingredients.map((ingredient) => {
//     const li = document.createElement("li");
//     li.textContent = ingredient;
//     li.classList.add("item");
//     return li;
//   });
// }
// const ingredientsListRef = document.getElementById("ingredients");
// ingredientsListRef.append(...createItemsMarkup(ingredients));

// console.log(createItemsMarkup(ingredients));

// console.dir(document);