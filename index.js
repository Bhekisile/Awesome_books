import './modules/displayPage.js';
import { displayBooks, Book } from './modules/bookCollection.js';
import today from './modules/time.js';

const container = document.querySelector('.container');
const addBtn = document.querySelector('#add');

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const title = titleInput.value;
  const author = authorInput.value;

  if (title === '' && author === '') {
    return;
  }

  Book.addBook(title, author);
  displayBooks(container);

  titleInput.value = '';
  authorInput.value = '';
});

today();