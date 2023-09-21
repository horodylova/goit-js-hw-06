
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const spanElement = document.querySelector('span');

const initialValue = parseInt(spanElement.textContent);


let counterValue = initialValue || 0;

decrementButton.addEventListener('click', () => {
  counterValue -=1;
  updateSpanElement();
});
incrementButton.addEventListener('click', () => {
  counterValue+=1;
  updateSpanElement();
});

function updateSpanElement () {
  spanElement.textContent = counterValue;
}



// const wrapButton = {
//     incrementButton: document.querySelector("[data-action='increment']"),
//     decrementButton: document.querySelector("[data-action='decrement']"),
//     span: document.getElementById("value"),
//     wrapper: document.getElementById("counter"),
//   };
//   let counterValue = 0;
//   const increment = () => {
//     counterValue += 1;
  
//     document.getElementById("value").textContent = counterValue;
//   };
  
//   const decrement = () => {
//     counterValue -= 1;
  
//     document.getElementById("value").textContent = counterValue;
//   };
  
//   wrapButton.incrementButton.addEventListener("click", increment);
//   wrapButton.decrementButton.addEventListener("click", decrement);