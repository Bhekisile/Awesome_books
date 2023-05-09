let bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];
const addBtn = document.querySelector('#add');
import displayBooks from './displayBooks.js';
// import addBook from './addBtn.js';

// Function to add a new book
const addBook = (title, author) => {
  const newBook = { title, author };
  bookCollection.push(newBook);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  displayBooks();
}

export default addBook;