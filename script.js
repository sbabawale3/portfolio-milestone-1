// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
  
  // 1. DOM Interaction: Simple Theme Toggle Button
  const themeBtn = document.querySelector("#theme-btn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  }

  // 2. Form Validation for Contact Form
  const contactForm = document.querySelector("#contact-form");
  const errorMsg = document.querySelector("#error-message");

  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      const nameInput = document.querySelector("#name").value.trim();
      const emailInput = document.querySelector("#email").value.trim();
      const messageInput = document.querySelector("#message").value.trim();

      // Check for empty fields
      if (nameInput === "" || emailInput === "" || messageInput === "") {
        event.preventDefault(); // Stop form submission
        errorMsg.textContent = "Please fill out all required fields.";
        errorMsg.style.color = "red";
      } else {
        errorMsg.textContent = ""; // Clear errors if valid
      }
    });
  }

 // 3. Optional Bonus: Simple API Fetch (Random Quote)
  const quoteText = document.querySelector("#quote-text");
  if (quoteText) {
    fetch("https://dummyjson.com/quotes/random")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        quoteText.textContent = '"' + data.quote + '" — ' + data.author;
      })
      .catch(function(error) {
        quoteText.textContent = "Could not load quote at this time.";
      });
  }
   });
  
