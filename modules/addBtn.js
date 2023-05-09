import addBook from './addNewBook.js';
import displayBooks from './displayBooks.js';

const addBtn = document.querySelector('#add');
let bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];

// Add an event listener to the "Add" button
addBtn.addEventListener('click', () => {
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const title = titleInput.value;
    const author = authorInput.value;
  
    addBook(title, author);
  
    // Clear the input fields
    titleInput.value = '';
    authorInput.value = '';
  });

  displayBooks();
  export default {addBtn, addBook};