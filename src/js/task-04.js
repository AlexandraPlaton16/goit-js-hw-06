// Initialize the counter value
let counterValue = 0;

// Select the span element that displays the counter value
const valueSpan = document.getElementById("value");

// Select the decrement and increment buttons
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

// Function to update the displayed value
function updateDisplay() {
  valueSpan.textContent = counterValue;
}

// Event listener for the decrement button
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  updateDisplay();
});

// Event listener for the increment button
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  updateDisplay();
});
