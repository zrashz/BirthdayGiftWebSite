// script.js

// Toggle the visibility of the navigation menu in mobile view
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const links = document.querySelector(".links");

    menuIcon.addEventListener("click", function () {
        links.classList.toggle("active");
    });
});

// Toggle the visibility of the search box
const searchIcon = document.querySelector(".search-icon");
const searchBox = document.querySelector(".search-box");

searchIcon.addEventListener("click", function () {
    searchBox.classList.toggle("visible");
});

// Form validation for booking form
const bookingForm = document.querySelector(".book-form form");
bookingForm.addEventListener("submit", function (e) {
    const name = bookingForm.querySelector('input[placeholder="Enter Your Name"]');
    const email = bookingForm.querySelector('input[type="email"]');
    const number = bookingForm.querySelector('input[type="number"]');
    const address = bookingForm.querySelector('textarea');

    if (!name.value || !email.value || !number.value || !address.value) {
        e.preventDefault();
        alert("Please fill out all fields.");
    } else if (!validateEmail(email.value)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
    }
});

// Form validation for contact form
const contactForm = document.querySelector(".contact-form form");
contactForm.addEventListener("submit", function (e) {
    const name = contactForm.querySelector('input[placeholder="Enter Your Name"]');
    const email = contactForm.querySelector('input[type="email"]');
    const message = contactForm.querySelector('textarea');

    if (!name.value || !email.value || !message.value) {
        e.preventDefault();
        alert("Please fill out all fields.");
    } else if (!validateEmail(email.value)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
    }
});

// Email validation function
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
