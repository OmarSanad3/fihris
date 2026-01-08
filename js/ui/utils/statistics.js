import { library } from "../../logic/app.js";
import { allowedCategories } from "../../logic/classes/Book.js";

export const calcCategoriesStats = () => {
  return allowedCategories.map((cat) => {
    const books = library.books.filter((book) => book.category === cat);
    const numOfAvailableBooks = books.filter(
      (book) => book.status === "available"
    ).length;
    return {
      category: cat,
      totalBooks: books.length,
      numOfAvailableBooks,
      numOfBorrowedBooks: books.length - numOfAvailableBooks,
    };
  });
};

export const calcStatsForDashboard = () => {
  const stats = {};
  const books = library.books;
  stats.totalBooks = books.length;
  stats.totalAuthors = library.authors.length;
  stats.availableBooks = books.filter((book) => book.status === "available").length;
  stats.borrowedBooks = stats.totalBooks - stats.availableBooks;

  return [
    {
      title: "Total Books",
      value: stats.totalBooks,
    },
    {
      title: "Total Authors",
      value: stats.totalAuthors,
    },
    {
      title: "Available Books",
      value: stats.availableBooks,
    },
    {
      title: "Borrowed Books",
      value: stats.borrowedBooks,
    },
  ];
};
