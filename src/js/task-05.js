// Select the input and span elements
const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

// Event listener for the input event
nameInput.addEventListener("input", () => {
  // Update the span's text content with the input's value
  // If the input is empty, display "Anonymous"
  nameOutput.textContent = nameInput.value.trim() || "Anonymous";
});
