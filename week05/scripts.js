// Select the form from the DOM
const applicationForm = document.querySelector('form');

// Add an event listener for the 'submit' action
applicationForm.addEventListener('submit', function (event) {

    // STOP the default browser behavior (page reload)
    event.preventDefault();

    // Capture the data using the FormData API
    const formData = new FormData(applicationForm);

    // Convert the data into a readable JavaScript Object
    const formObject = Object.fromEntries(formData.entries());

    // Handle checkboxes separately (FormData only keeps the last checked value by default)
    const selectedSkills = formData.getAll('skills');
    if (selectedSkills.length > 0) {
        formObject.skills = selectedSkills;
    }

    // Output the captured data to the console to verify
    console.log('Application Data Captured Successfully:', formObject);

    // Optional: Reset the form after successful submission
    applicationForm.reset();
});