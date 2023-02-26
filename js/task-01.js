const listItemsAmount = document.querySelectorAll("ul#categories .item");
console.log(`Number of categories: `, listItemsAmount.length);

const categoriesDetais = listItemsAmount.forEach((category) => {
    console.log(`Category: `, category.firstElementChild.textContent);
    console.log(`Elements:`, category.querySelectorAll("li").length)
});