import { DateTime } from './modules/luxon.js';
import './modules/displayPage.js';
// import './modules/bookCollection.js';

import { displayBooks, addBook } from './modules/bookCollection.js';

const container = document.querySelector('.container');
const addBtn = document.querySelector('#add');

displayBooks(container);

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const titleInput = document.querySelector('#title');
  const authorInput = document.querySelector('#author');
  const title = titleInput.value;
  const author = authorInput.value;

  addBook(title, author);
  displayBooks(container);

  titleInput.value = '';
  authorInput.value = '';
});

const today = () => {
  const dates = document.querySelectorAll('.date');
  for (let i = 0; i < dates.length; i += 1) {
    const today = DateTime.now().toFormat('MMMM dd yyyy, h:mm:ss a');
    dates[i].innerHTML = today;
  }
};
setInterval(today, 1000);