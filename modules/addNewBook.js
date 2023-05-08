let bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];
const addBtn = document.querySelector('#add');

// Function to add a new book
const addBook = ((title, author) => {
  const newBook = { title, author };
  bookCollection.push(newBook);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  displayBooks();
});

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

export default addBook;