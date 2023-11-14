const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", validateInput);

function validateInput() {
  const inputValue = validationInput.value.trim().length;

  if (inputValue === 6) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
}
