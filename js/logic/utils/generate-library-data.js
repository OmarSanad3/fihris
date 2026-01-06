import Book from "../classes/Book.js";
import Author from "../classes/Author.js";

export default function generateLibraryData() {
  const authors = [
    new Author("George Orwell", "British"),
    new Author("Harper Lee", "American"),
    new Author("J.K. Rowling", "British"),
    new Author("F. Scott Fitzgerald", "American"),
    new Author("Jane Austen", "British"),
  ];

  const books = [
    new Book("1984", "9780451524935", authors[0]._id, "Fiction", "Available"),
    new Book(
      "To Kill a Mockingbird",
      "9780060935467",
      authors[1]._id,
      "Fiction",
      "Borrowed"
    ),
    new Book(
      "Harry Potter and the Sorcerer's Stone",
      "9780590353427",
      authors[2]._id,
      "Fiction",
      "Available"
    ),
    new Book(
      "The Great Gatsby",
      "9780743273565",
      authors[3]._id,
      "Fiction",
      "Available"
    ),
    new Book(
      "Pride and Prejudice",
      "9780141439518",
      authors[4]._id,
      "Fiction",
      "Borrowed"
    ),
  ];

  return { books, authors };
}
