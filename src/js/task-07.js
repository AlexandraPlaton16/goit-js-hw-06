// Select the input and span elements
const fontSizeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");

// Set initial font size
text.style.fontSize = `${fontSizeControl.value}px`;

// Event listener for the input event
fontSizeControl.addEventListener("input", () => {
  // Update the font size of the text based on the input's value
  text.style.fontSize = `${fontSizeControl.value}px`;
});
