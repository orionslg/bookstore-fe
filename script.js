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

async function addNewBook() {
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;

  try {
      const response = await fetch(`${API_BASE_URL}/books`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, author })
      });
      const data = await response.json();
  } catch (error) {
      console.error('Error adding book:', error);
  } finally {
      fetchBooks(); // Refresh the book list after adding a new book
  }
}

async function fetchBookById() {
  const bookId = document.getElementById('book-id').value;
  try {
      const response = await fetch(`${API_BASE_URL}/books/${bookId}`);
      const book = await response.json();
      const bookDetails = document.getElementById('book-details');
      bookDetails.innerHTML = `Title: ${book.title}<br>Author: ${book.author}`;
  } catch (error) {
      console.error('Error fetching book:', error);
  }
}

fetchBooks();