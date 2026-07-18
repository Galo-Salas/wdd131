// 1. Dynamically update the footer dates
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last Modification: ${lastModified}`;

// 2. Wind Chill Calculation Variables (Metric System)
// These match the static HTML values we set earlier
const temperature = 10;
const windSpeed = 5;

// 3. The Wind Chill Function
function calculateWindChill(temp, speed) {
    // Translating the scientific formula into a single line of JavaScript
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// 4. Conditional Logic and DOM Update
function displayWindChill() {
    const windChillElement = document.getElementById('windChill');

    // Check if the viability conditions are met for metric values
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChillValue = calculateWindChill(temperature, windSpeed);
        // We use toFixed(1) to round the result to one decimal place for a clean UI
        windChillElement.textContent = `${windChillValue.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

// 5. Execute the function when the script loads
displayWindChill();