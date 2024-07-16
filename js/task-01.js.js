// Select the ul#categories element
const categories = document.querySelector("#categories");

// Get all li.item elements
const items = categories.querySelectorAll(".item");

// Log the number of categories
console.log(`Number of categories: ${items.length}`);

// Loop through each li.item element
items.forEach((item) => {
  // Get the text content of the h2 element
  const categoryName = item.querySelector("h2").textContent;

  // Get the number of li elements within the current li.item element
  const elementsCount = item.querySelectorAll("ul li").length;

  // Log the category name and number of elements
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${elementsCount}`);
});
