// BUG FIX 1: The original code used querySelector('area'), which looks for an <area> tag. 
// We need to target the ID "area", so we must use '#area'.
const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

let area = 0;

// BUG FIX 2: Removed '==' and replaced it with '='. 
// '==' is for comparison, '=' is for assignment.
const PI = 3.14159;

// BUG FIX 3: Changed 'const' to 'let'. 
// We cannot reassign a 'const' variable, but the instructions require changing the radius to 20 later.
let radius = 10;

area = PI * radius * radius;

// BUG FIX 4: You cannot assign a number directly to an HTML element. 
// You must assign it to the element's textContent property.
radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Reassigning values to test the second output
radius = 20;
area = PI * radius * radius;

// Updating the DOM with the new values
radiusOutput.textContent = radius;
areaOutput.textContent = area;