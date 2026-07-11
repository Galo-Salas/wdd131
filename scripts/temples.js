// Ensure the DOM is fully loaded before executing scripts
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. Dynamic Footer Implementation ---
    // Retrieve the current year dynamically
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    // Retrieve and format the document's last modified date
    const lastModifiedDate = document.lastModified;
    document.getElementById("lastModified").textContent = lastModifiedDate;


    // --- 2. Hamburger Menu Interaction ---
    // Select the necessary DOM elements
    const mainnav = document.querySelector('.navigation');
    const hambutton = document.querySelector('#menu');

    // Add an event listener to toggle classes upon clicking
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('open');
        hambutton.classList.toggle('open');

        // Toggle the button text between the hamburger icon and an empty string
        // (The CSS handles inserting the '✖' when the 'open' class is active)
        if (hambutton.classList.contains('open')) {
            hambutton.textContent = "";
        } else {
            hambutton.textContent = "≡";
        }
    });
});