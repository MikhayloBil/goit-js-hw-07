const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = {};
  const formInputs = event.target.elements;

  for (let input of formInputs) {
    if (input.nodeName === "INPUT") {
      const trimmedValue = input.value.trim();
      if (!trimmedValue) {
        alert("All form fields must be filled in");
        return;
      }
      formData[input.name] = trimmedValue;
    }
  }

  console.log(formData);
  event.target.reset();
});
