'use strict';

// Function to handle contact form submission
function handleContactForm(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form data
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Validate email format
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Handle form submission (e.g., send data to server)
    // For demonstration, we will just log the data
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message!');
}

// Function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Attach event listener to the contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', handleContactForm);
}