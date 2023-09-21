/// два варианта решения 


const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', event => {
  event.preventDefault(); 

  const inputEmail = formRef.elements.email;
  const inputPassword = formRef.elements.password;

  if (!inputEmail.value || !inputPassword.value) {
    
    alert('Будь ласка, заповніть форму');
  } else {

    const formData = [];

    formData.push({ name: 'email', value: inputEmail.value });
    formData.push({ name: 'password', value: inputPassword.value });

    console.log(formData);
  }
});
















// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   console.log("form submit");

//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === "" || password.value === "") {
//     return alert("Please fill in all the fields!");
//   }
//   const userDetails = { email: email.value, Password: password.value };

//   console.log(userDetails);
//   event.currentTarget.reset();
// }
