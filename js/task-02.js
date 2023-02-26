const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const ulRef = document.createElement("li");
// ingredients.forEach((name) => {
//   const liRef = document.createElement('li');
//   liRef.textContent = name;
//   ulRef.appendChild(liRef);
// });

// console.log(ulRef);

const ulRef = document.createElement("li");
ingredients.map((name) => {
 const liRef = document.createElement('li');
liRef.textContent = name;
ulRef.appendChild(liRef);
});
 console.log(ulRef);
 