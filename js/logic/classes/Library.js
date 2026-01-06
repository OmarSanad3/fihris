import { saveLibraryData } from "../../store/library-storage.js";
import Author from "./Author.js";
import Book from "./Book.js";

function Library() {
  this._id = `Library-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  this.books = [];
  this.authors = [];
}

/* Library Book Methods */

Library.prototype.addBook = function (book) {
  if (!book || book.constructor !== Book) {
    throw new Error("Invalid book object❗❗");
  }
  if (this.books.find((b) => b._id === book._id) !== undefined) {
    throw new Error("Book already exists❗❗");
  }
  if (this.books.find((b) => b.title === book.title) !== undefined) {
    throw new Error("Another book with this title already exists❗❗");
  }
  if (
    this.authors.find((author) => author._id === book.authorId) === undefined
  ) {
    throw new Error("Author not found❗❗");
  }
  this.books.push(book);
  this.syncStorage();
};

Library.prototype.getBooks = function () {
  return this.books;
};

Library.prototype.findBookById = function (bookId) {
  return this.books.find((book) => book._id === bookId);
};

Library.prototype.updateBook = function (bookId, bookData) {
  const book = this.findBookById(bookId);
  if (!book) {
    throw new Error("Book not found❗❗");
  }
  if (
    bookData.authorId &&
    this.authors.find((author) => author._id === bookData.authorId) ===
      undefined
  ) {
    throw new Error("Author not found❗❗");
  }
  if (bookData.title) {
    const existingBook = this.books.find(
      (b) => b.title === bookData.title && b._id !== bookId
    );
    if (existingBook) {
      throw new Error("Another book with this title already exists❗❗");
    }
  }

  if (
    bookData.category &&
    !Book.allowedCategories.includes(bookData.category)
  ) {
    throw new Error("Invalid category❗❗");
  }
  if (bookData.status && !Book.allowedStatuses.includes(bookData.status)) {
    throw new Error("Invalid status❗❗");
  }
  Object.assign(book, bookData, { _id: book._id });
  this.syncStorage();
  return book;
};

Library.prototype.removeBook = function (bookId) {
  const bookIndex = this.books.findIndex((book) => book._id === bookId);
  if (bookIndex !== -1) {
    this.books.splice(bookIndex, 1);
    this.syncStorage();
    return true;
  }
  return false;
};

/* Library Author Methods */

Library.prototype.addAuthor = function (author) {
  if (!author || author.constructor !== Author) {
    throw new Error("Invalid author object❗❗");
  }
  if (this.authors.find((a) => a._id === author._id) !== undefined) {
    throw new Error("Author already exists❗❗");
  }
  if (this.authors.find((a) => a.name === author.name) !== undefined) {
    throw new Error("Another author with this name already exists❗❗");
  }
  this.authors.push(author);
  this.syncStorage();
};

Library.prototype.getAuthors = function () {
  return this.authors;
};

Library.prototype.findAuthorById = function (authorId) {
  return this.authors.find((author) => author._id === authorId);
};

Library.prototype.updateAuthor = function (authorId, authorData) {
  const author = this.findAuthorById(authorId);
  if (!author) {
    throw new Error("Author not found❗❗");
  }
  if (authorData.name) {
    const existingAuthor = this.authors.find(
      (a) => a.name === authorData.name && a._id !== authorId
    );
    if (existingAuthor) {
      throw new Error("Another author with this name already exists❗❗");
    }
  }
  Object.assign(author, authorData, { _id: author._id });
  this.syncStorage();
  return author;
};

Library.prototype.canRemoveAuthor = function (authorId) {
  return !this.books.some((book) => book.authorId === authorId);
};

Library.prototype.removeAuthor = function (authorId) {
  const authorIndex = this.authors.findIndex(
    (author) => author._id === authorId
  );
  if (authorIndex !== -1) {
    if (!this.canRemoveAuthor(authorId)) {
      throw new Error("Cannot remove author with associated books❗❗");
    }
    this.authors.splice(authorIndex, 1);
    this.syncStorage();
    return true;
  }
  return false;
};

Library.prototype.syncStorage = function () {
  saveLibraryData(this);
};

export default Library;
