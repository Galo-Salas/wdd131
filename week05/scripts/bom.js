// 1. Select elements from the DOM
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// 2. Initialize the array. 
let chaptersArray = getChapterList() || [];

// 3. Populate the list on initial load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// 4. Streamlined Button Click Event
buttonElement.addEventListener("click", () => {
    if (inputElement.value !== "") {
        displayList(inputElement.value);
        chaptersArray.push(inputElement.value);
        setChapterList();
        inputElement.value = "";
        inputElement.focus();
    }
});

// 5. Function to create and append the list item
function displayList(item) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");

    li.textContent = item;
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");

    li.appendChild(deleteBtn);
    listElement.appendChild(li);

    deleteBtn.addEventListener("click", function () {
        listElement.removeChild(li);
        deleteChapter(li.textContent);
        inputElement.focus();
    });
}

// 6. Function to stringify and save the array to localStorage
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// 7. Function to parse and retrieve the array from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

// 8. Function to clean the string and remove it from the array
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}