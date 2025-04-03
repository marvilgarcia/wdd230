const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        // Append delete button to list item
        li.append(deleteButton);
        list.append(li);

        // Add event listener to delete the list item when button is clicked
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        // Clear input field and refocus
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a book and chapter!');
        input.focus();
    }
});
