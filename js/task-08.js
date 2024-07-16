document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
      alert("All fields must be filled in");
      return;
    }

    const formData = {
      email: email,
      password: password,
    };

    console.log("Form Data:", formData);

    form.reset(); // Clear the form fields
  });
});
