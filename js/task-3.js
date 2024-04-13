const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
const namePlaceholder = document.querySelector("placeholder");

nameInput.addEventListener("input", (event) => {
  const trimmedValue = event.target.value.trim();
  nameOutput.textContent = trimmedValue || "Anonymous";
});
