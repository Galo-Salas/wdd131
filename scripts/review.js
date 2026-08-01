// Retrieve the current count from localStorage, or default to 0
let numReviews = Number(window.localStorage.getItem("reviewCounter-Galo")) || 0;

// Increment the counter because a new review was just submitted
numReviews++;

// Save the updated count back to localStorage
window.localStorage.setItem("reviewCounter-Galo", numReviews);

// Display the count on the confirmation page
document.getElementById("reviewCount").textContent = numReviews;