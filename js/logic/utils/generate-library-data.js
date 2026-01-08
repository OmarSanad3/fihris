import Book from "../classes/Book.js";
import Author from "../classes/Author.js";

export default function generateLibraryData() {
  const authors = [
    new Author("George Orwell", "British"), // 0
    new Author("Harper Lee", "American"), // 1
    new Author("J.K. Rowling", "British"), // 2
    new Author("F. Scott Fitzgerald", "American"), // 3
    new Author("Jane Austen", "British"), // 4
    new Author("Walter Isaacson", "American"), // 5
    new Author("Stephen Hawking", "British"), // 6
    new Author("Yuval Noah Harari", "Israeli"), // 7
    new Author("Tara Westover", "American"), // 8
    new Author("Carl Sagan", "American"), // 9
  ];
  const books = [
    new Book("1984", "9780451524935", authors[0]._id, "fiction", "available"),
    new Book(
      "To Kill a Mockingbird",
      "9780060935467",
      authors[1]._id,
      "fiction",
      "borrowed"
    ),
    new Book(
      "Harry Potter and the Sorcerer's Stone",
      "9780590353427",
      authors[2]._id,
      "fiction",
      "available"
    ),
    new Book(
      "The Great Gatsby",
      "9780743273565",
      authors[3]._id,
      "fiction",
      "available"
    ),
    new Book(
      "Pride and Prejudice",
      "9780141439518",
      authors[4]._id,
      "fiction",
      "borrowed"
    ),
    new Book(
      "Sapiens: A Brief History of Humankind",
      "9780062316097",
      authors[7]._id,
      "history",
      "available"
    ),
    new Book(
      "A Brief History of Time",
      "9780553380163",
      authors[6]._id,
      "science",
      "available"
    ),
    new Book("Cosmos", "9780345331359", authors[9]._id, "science", "borrowed"),
    new Book(
      "Animal Farm",
      "9780451526342",
      authors[0]._id,
      "fiction",
      "available"
    ),
    new Book(
      "Homo Deus",
      "9780062464316",
      authors[7]._id,
      "history",
      "available"
    ),
    new Book(
      "Steve Jobs",
      "9781451648539",
      authors[5]._id,
      "biography",
      "borrowed"
    ),
    new Book(
      "Educated",
      "9780393356687",
      authors[8]._id,
      "biography",
      "available"
    ),
    new Book(
      "Leonardo da Vinci",
      "9781501139154",
      authors[5]._id,
      "biography",
      "available"
    ),
    new Book(
      "Elon Musk",
      "9780753555620",
      authors[5]._id,
      "technology",
      "borrowed"
    ),
    new Book(
      "The Grand Design",
      "9780553384666",
      authors[6]._id,
      "science",
      "available"
    ),
    new Book(
      "21 Lessons for the 21st Century",
      "9780525512172",
      authors[7]._id,
      "non-fiction",
      "available"
    ),
    new Book(
      "Persuasion",
      "9780141439846",
      authors[4]._id,
      "fiction",
      "available"
    ),
    new Book(
      "The Pale Blue Dot",
      "9780345376596",
      authors[9]._id,
      "science",
      "borrowed"
    ),
    new Book(
      "Sense and Sensibility",
      "9780141439662",
      authors[4]._id,
      "fiction",
      "available"
    ),
    new Book(
      "The Code Breaker",
      "9781982115852",
      authors[5]._id,
      "technology",
      "available"
    ),
  ];
  return { books, authors };
}
