// --- Starter JavaScript Code ---

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

function displayBook(book) {
  const bookList = document.getElementById("book-list");
  const bookDiv = document.createElement("div");

  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;

  bookList.appendChild(bookDiv);
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

displayBook(book1);
displayBook(book2);