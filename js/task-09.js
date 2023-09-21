//два варианта решения 

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const widgetRef = document.querySelector('.widget');
const buttonRef = document.querySelector('button');

buttonRef.addEventListener('click', event => {
  const randomColor = getRandomHexColor();
  widgetRef.style.backgroundColor = randomColor;
});
 



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const bodyEl = document.querySelector("body");
// const changeColorText = document.querySelector(".color");
// const changeButton = document.querySelector(".change-color");

// changeButton.addEventListener("click", onChangeButtonClick);

// function onChangeButtonClick() {
//   const generatedColor = getRandomHexColor();
//   bodyEl.style.backgroundColor = `${generatedColor}`;
//   changeColorText.textContent = generatedColor;
//   console.log(`${getRandomHexColor()}`);
// }