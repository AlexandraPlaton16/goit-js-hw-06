// Select the input element
const validationInput = document.getElementById("validation-input");

// Event listener for the blur event
validationInput.addEventListener("blur", () => {
  // Get the data-length attribute value and convert it to a number
  const requiredLength = Number(validationInput.getAttribute("data-length"));

  // Check if the length of the input value matches the required length
  if (validationInput.value.length === requiredLength) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    validationInput.classList.remove("valid");
  }
});
