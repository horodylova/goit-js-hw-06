//два варианта решения задачи

const inputRef = document.getElementById("name-input");
const outputRef = document.getElementById('name-output');

inputRef.addEventListener('input', (event) => {
  outputRef.textContent = event.target.value || "Anonymous";
});


// const textInput = document.getElementById("name-input");
// const output = document.getElementById("name-output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;

//   if (event.target.value === "") {
//     output.textContent = "Anonymous";
//   }
// });
// console.log(textInput);
