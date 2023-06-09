const links = document.querySelectorAll('.links');
export default links.forEach((link) => {
  link.addEventListener('click', function handleClick() {
    const list = document.getElementById('books-list');
    const form = document.getElementById('add-book');
    const contact = document.getElementById('contact-cont');

    if (this.id === 'linkList') {
      list.style.display = 'block';
    } else {
      list.style.display = 'none';
    }
    if (this.id === 'linkAdd') {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
    if (this.id === 'linkCont') {
      contact.style.display = 'block';
    } else {
      contact.style.display = 'none';
    }
  });
});