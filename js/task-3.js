const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");
const namePlaceholder = document.querySelector("placeholder");

nameInput.style.width = "360px";
nameInput.style.height = "40px";
//namePlaceholder.style.border-radius = "4px 0px 0px 0px";
//nameInput.style.border = "1px solid rgba(128, 128, 128, 1)";
//namePlaceholder.style.font-family = "Montserrat";
//namePlaceholder.style.font-size = "16px";
//namePlaceholder.style.font-weight = "400";
//namePlaceholder.style.line-height = "24px";
//namePlaceholder.style.letter-spacing = "0.04em";
//namePlaceholder.style.text-align = "left";

nameInput.addEventListener("input", (event) => {
  const trimmedValue = event.target.value.trim();
  nameOutput.textContent = trimmedValue || "Anonymous";
});
