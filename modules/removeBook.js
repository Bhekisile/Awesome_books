let bookCollection = JSON.parse(localStorage.getItem('bookCollection')) || [];
// Function to remove a book
const removeBook = ((book) => {
    bookCollection = bookCollection.filter((b) => b !== book);
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  });

  export default removeBook;