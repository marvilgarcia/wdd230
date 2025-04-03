const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Retrieve stored chapters or initialize an empty array
let chaptersArray = getChapterList() || [];

// Populate the displayed list on page load
chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener('click', () => {
    if (input.value.trim() !== '') { // Ensure input is not empty
        displayList(input.value); // Display the new chapter
        chaptersArray.push(input.value); // Add to array
        setChapterList(); // Update localStorage
        input.value = ''; // Clear input field
        input.focus(); // Refocus input
    } else {
        alert('Please enter a book and chapter!');
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove ❌
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(); // Update localStorage
}
