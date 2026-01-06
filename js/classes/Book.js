const allowedStatuses = ["Available", "Borrowed"];
const allowedCategories = [
  "Fiction",
  "Non-Fiction",
  "Science",
  "History",
  "Biography",
  "Technology",
];

function Book(title, isbn, authorId, category, status) {
  if (!allowedCategories.includes(category)) {
    throw new Error("Invalid category❗❗");
  }
  if (!allowedStatuses.includes(status)) {
    throw new Error("Invalid status❗❗");
  }

  this._id = `Book-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  this.title = title;
  this.isbn = isbn;
  this.authorId = authorId;
  this.category = category;
  this.status = status;
}

Book.allowedCategories = allowedCategories;
Book.allowedStatuses = allowedStatuses;

export default Book;
