import { library } from "../../logic/app.js";
import { allowedCategories } from "../../logic/classes/Book.js";

export const calcCategoriesStats = () => {
  return allowedCategories.map((cat) => {
    const books = library.books.filter((book) => book.category === cat);
    const numOfAvailableBooks = books.filter((book) => book.status === "available").length;
    return {
      category: cat,
      totalBooks: books.length,
      numOfAvailableBooks,
      numOfBorrowedBooks: books.length - numOfAvailableBooks,
    };
  });
};
