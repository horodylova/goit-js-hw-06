////два варианта решения 

const inputRef = document.getElementById('validation-input');
console.log(inputRef);

inputRef.addEventListener("blur", (event) => {
  const inputValue = event.target.value.length;
  const attributeValue = parseInt(inputRef.getAttribute('data-length'));  

  if (inputValue === attributeValue) {
    greenBorder();
  } else {
    redBorder();
  }
});

function greenBorder() {
  inputRef.classList.remove('invalid');  
  inputRef.classList.add('valid'); 
}

function redBorder() {
  inputRef.classList.remove('valid');  
  inputRef.classList.add('invalid');  
}






// const textInput = document.getElementById("validation-input");

// textInput.addEventListener("blur", (event) => {
//   if (event.currentTarget.value.length === textLength) {
//     event.target.classList.add("valid");
//     event.target.classList.remove("invalid");
//   } else {
//     event.target.classList.add("invalid");
//     event.target.classList.remove("valid");
//   }
// });