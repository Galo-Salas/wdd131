// 1. Target existing DOM elements
// This connects your JavaScript variables to the HTML tags you created above.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul'); // Filled in the blank

// 2. Create new DOM elements in memory
// These do not appear on the screen yet; they exist only in the script's memory.
const li = document.createElement('li');
const deleteButton = document.createElement('button');

// 3. Populate the elements with content
// We use textContent for security (preventing script injection).
li.textContent = input.value;
deleteButton.textContent = '❌';

// 4. Implement Accessibility (Aria-Label)
// This translates the visual '❌' into a meaningful action for visually impaired users.
deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

// 5. Assemble and render the elements
// We append the button inside the list item, then append the list item inside the unordered list.
li.append(deleteButton);
list.append(li);