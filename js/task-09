// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", () => {
  const changeColorButton = document.querySelector(".change-color");
  const colorSpan = document.querySelector(".color");

  // Add click event listener to the button
  changeColorButton.addEventListener("click", () => {
    const randomColor = getRandomHexColor(); // Generate random color
    document.body.style.backgroundColor = randomColor; // Change body background color
    colorSpan.textContent = randomColor; // Display color value in span
  });
});
