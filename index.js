import addBook from './modules/addNewBook.js';
import displayBooks from './modules/displayBooks.js';
import links from './modules/displayPage.js';
import removeBook from './modules/removeBook.js';
import addBtn from './modules/addBtn.js';
import { DateTime } from './modules/luxon.js';

const dates = document.querySelectorAll('.date');
for (let i=0; i<dates.length; i++) {
dates[i].innerHTML = DateTime.now().toFormat('MMMM dd yyyy, h:mm:ss a');
}