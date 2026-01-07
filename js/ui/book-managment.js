import { library } from "../logic/app.js";
import Book, {
  allowedCategories,
  allowedStatuses,
} from "../logic/classes/Book.js";
import BookRow from "./components/BookRow.js";

const addBookModal = document.getElementById("add-book-modal");
const openAddBookBtn = document.getElementById("open-add-book-btn");
const closeAddBookBtn = document.getElementById("close-add-book-btn");
const cancelAddBookBtn = document.getElementById("cancel-add-book-btn");
const addBookForm = document.getElementById("add-book-form");

const booksTableBody = document.getElementById("books-table-body");

const [searchBookFilterEle, selectCategoryFilterEle, selectStatusFilterEle] = [
  document.getElementById("search-book-filter"),
  document.getElementById("select-category-filter"),
  document.getElementById("select-status-filter"),
];

const [
  selectAuthorAddBookEle,
  selectCategoryAddBookEle,
  selectStatusAddBookEle,
] = [
  document.getElementById("select-author-add-book"),
  document.getElementById("select-category-add-book"),
  document.getElementById("select-status-add-book"),
];

/* ------------------------------- Declared Variable ------------------------------- */

const norm = (w) => w.toLowerCase().trim();

const filteringBookData = {
  search: null,
  category: "all",
  status: "all",
};

/* ------------------------------- Rendering Logic ------------------------------- */

const render = () => {
  renderBookTable();
  renderSelectElements();
};
render();

function renderBookTable() {
  const passSearch = (bookTitle, bookISBN) => {
    if (!filteringBookData.search) return true;
    if (norm(bookTitle).indexOf(filteringBookData.search) !== -1) return true;
    if (norm(bookISBN).indexOf(filteringBookData.search) !== -1) return true;
    return false;
  };
  const passCategoryFilter = (cat) => {
    if (filteringBookData.category === "all") return true;
    return filteringBookData.category === norm(cat);
  };
  const passStatusFilter = (status) => {
    if (filteringBookData.status === "all") return true;
    return filteringBookData.status === norm(status);
  };

  booksTableBody.innerHTML = "";
  library.books.forEach((book) => {
    const author = library.authors.find(
      (author) => author._id === book.authorId
    );

    if (!passSearch(book.title, book.isbn)) {
      return;
    }

    if (!passCategoryFilter(book.category)) {
      return;
    }

    if (!passStatusFilter(book.status)) {
      return;
    }

    const bookRowHTML = BookRow(
      book.title,
      book.isbn,
      author.name,
      book.category,
      book.status
    );
    booksTableBody.insertAdjacentHTML("beforeend", bookRowHTML);
  });
}

function renderSelectElements() {
  allowedCategories.forEach((cat) => {
    const opt = `<option value="${cat.toLowerCase()}">${cat}</option>`;
    selectCategoryFilterEle.insertAdjacentHTML("beforeend", opt);
    selectCategoryAddBookEle.insertAdjacentHTML("beforeend", opt);
  });

  allowedStatuses.forEach((status) => {
    const opt = `<option value="${status.toLowerCase()}">${status}</option>`;
    selectStatusFilterEle.insertAdjacentHTML("beforeend", opt);
    selectStatusAddBookEle.insertAdjacentHTML("beforeend", opt);
  });

  library.authors.forEach((author) => {
    const opt = `<option value="${author._id}">${author.name}</option>`;
    selectAuthorAddBookEle.insertAdjacentHTML("beforeend", opt);
  });
}

/* ------------------------------- Add Book Form ------------------------------- */

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(addBookForm);

  const title = formData.get("title");
  const isbn = formData.get("isbn");
  const authorId = formData.get("author");
  const category = formData.get("category");
  const status = formData.get("status");

  // console.log("New Book Added:", { title, isbn, authorId, category, status });

  const newBook = new Book(title, isbn, authorId, category, status);
  library.addBook(newBook);

  render();

  addBookModal.classList.remove("flex");
  addBookModal.classList.add("hidden");
  addBookForm.reset();
});

openAddBookBtn.addEventListener("click", () => {
  addBookModal.classList.remove("hidden");
  addBookModal.classList.add("flex");
});

closeAddBookBtn.addEventListener("click", () => {
  addBookModal.classList.remove("flex");
  addBookModal.classList.add("hidden");
});

cancelAddBookBtn.addEventListener("click", () => {
  addBookModal.classList.remove("flex");
  addBookModal.classList.add("hidden");
  addBookForm.reset();
});

addBookModal.addEventListener("click", (event) => {
  if (event.target === addBookModal) {
    addBookModal.classList.remove("flex");
    addBookModal.classList.add("hidden");
  }
});

/* ------------------------------- Filtering Books ------------------------------- */

searchBookFilterEle.addEventListener("input", (event) => {
  filteringBookData.search = norm(event.target.value);
  render();
});

selectCategoryFilterEle.addEventListener("change", (event) => {
  filteringBookData.category = norm(event.target.value);
  render();
});

selectStatusFilterEle.addEventListener("change", (event) => {
  filteringBookData.status = norm(event.target.value);
  render();
});
