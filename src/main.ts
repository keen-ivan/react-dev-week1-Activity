class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

interface Review {
  bookId: number;
  rating: number;
  comment: string;
}

const reviews: Review[] = [];

function addReview(
  bookId: number,
  rating: number,
  comment: string
): void {
  const review: Review = {
    bookId,
    rating,
    comment
  };

  reviews.push(review);
}

function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");

  if (!bookList) {
    return;
  }

  const bookDiv = document.createElement("div");

  bookDiv.innerHTML = `
    <h2>${book.title}</h2>
    <p>By ${book.author}, ${book.year}</p>
  `;

  bookList.appendChild(bookDiv);
}

const book1: Book = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2: Book = new Book(
  "The Lord of the Rings",
  "J.R.R. Tolkien",
  1954
);

displayBook(book1);
displayBook(book2);

addReview(1, 5, "An excellent book!");
addReview(2, 5, "A fantastic story!");