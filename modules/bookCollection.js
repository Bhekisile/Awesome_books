let bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];
const container = document.querySelector('.container');

const addBtn = document.querySelector('#add');

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook(title, author) {
    const newBook = new Book(title, author);
    bookCollection.push(newBook);
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  }

  static removeBook(book) {
    bookCollection = bookCollection.filter((b) => b !== book);
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  }
}

const displayBooks = (container) => {
  container.innerHTML = '';
  bookCollection.forEach((book) => {
    const newBook = document.createElement('div');
    newBook.classList.add('newBook');
    newBook.innerHTML = `<p>${book.title} by ${book.author}</p>
                          <button class="remove">Remove</button>`;
    container.appendChild(newBook);

    const removeBtn = newBook.querySelector('.remove');
    removeBtn.addEventListener('click', () => {
      Book.removeBook(book);
      newBook.remove();
    });
  });
};

displayBooks(container);

export { displayBooks, Book };