const API_BASE_URL = 'https://railway-express-production-cb55.up.railway.app';

async function fetchBooks() {
  try {
    const response = await fetch(`${API_BASE_URL}/books`);
    const data = await response.json();
    const bookList = document.getElementById('books-list');
    bookList.innerHTML = '';

    data.forEach((book) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${book.title} by ${book.author}`;
      bookList.appendChild(listItem);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchBooks();