// The array of ingredients
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Select the ul#ingredients element
const ingredientsList = document.querySelector("#ingredients");

// Create an array to hold the list items
const listItems = ingredients.map((ingredient) => {
  // Create a new li element
  const listItem = document.createElement("li");

  // Set the text content to the ingredient
  listItem.textContent = ingredient;

  // Add the class 'item' to the li element
  listItem.classList.add("item");

  // Return the created li element
  return listItem;
});

// Insert all list items into the ul#ingredients in a single operation
ingredientsList.append(...listItems);
