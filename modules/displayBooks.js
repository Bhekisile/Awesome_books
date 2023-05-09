const container = document.querySelector('.container');
const addBtn = document.querySelector('#add');
let bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];
console.log('books', bookCollection);
import removeBook from './removeBook.js';
import addBook from './addNewBook.js';
// import addBook from './addBtn.js';

// Function to display all books in the collection
const displayBooks = () => {
  container.innerHTML = '';
  bookCollection.forEach((book) => {
    const newBook = document.createElement('div');
    newBook.classList.add('newBook');
    newBook.innerHTML = `<p>${book.title} by ${book.author}</p>
                        <button class="remove">Remove</button>`;
    container.appendChild(newBook);

    // Adding event listener to the "Remove" button
    const removeBtn = newBook.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
      removeBook(book);
      newBook.remove();
    });
  });
}
// displayBooks();

  export default displayBooks;