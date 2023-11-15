const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", validateInput);
function updateValidationClass(element, addClass, removeClass) {
  element.classList.add(addClass);
  element.classList.remove(removeClass);
}

function validateInput() {
  const requiredLength = parseInt(
    validationInput.getAttribute("data-length"),
    10
  );
  const inputValue = validationInput.value.trim().length;

  if (inputValue === requiredLength) {
    updateValidationClass(validationInput, "valid", "invalid");
  } else {
    updateValidationClass(validationInput, "invalid", "valid");
  }
}