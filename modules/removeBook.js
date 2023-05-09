let bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];
const container = document.querySelector('.container');
const addBtn = document.querySelector('#add');
const newBook = document.querySelector('.newBook');
// import removeBtn from './displayBooks.js';

// Function to remove a book
function removeBook(book) {
  bookCollection = bookCollection.filter((b) => b !== book);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
}
export default removeBook;