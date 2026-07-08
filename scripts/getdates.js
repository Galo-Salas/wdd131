// 1. Dynamically output the current year for the copyright
const currentYearElement = document.querySelector("#currentyear");
const today = new Date();
currentYearElement.innerHTML = today.getFullYear();

// 2. Dynamically output the date the document was last modified
const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;