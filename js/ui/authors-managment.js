import AuthorBookRow from "./components/AuthorBookRow.js";
import AuthorRow from "./components/AuthorRow.js";

/* Add Author Modal Elements */
const addAuthorModal = document.getElementById("add-author-modal");
const openAddAuthorBtn = document.getElementById("open-add-author-btn");
const closeAddAuthorBtn = document.getElementById("close-add-author-btn");
const cancelAddAuthorBtn = document.getElementById("cancel-add-author-btn");
const addAuthorForm = document.getElementById("add-author-form");

/* Show Author Books Modal Elements */
const showAuthorBooksModal = document.getElementById("show-author-books-modal");
const closeShowAuthorBooksBtn = document.getElementById(
  "close-show-author-books-btn"
);
const authorBooksContainer = document.getElementById(
  "author-books-container"
);

const authorsTableBody = document.getElementById("authors-table-body");

/* Rendering Logic */

(() => {
  authorsTableBody.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    library.authors.forEach((author) => {
      const authorsBooks = library.books.filter(
        (book) => book.authorId === author._id
      );
      const authorRowHTML = AuthorRow(
        author._id,
        author.name,
        author.nationality,
        authorsBooks.length
      );
      authorsTableBody.innerHTML += authorRowHTML;
    });
  }
})();

/* ------------------------------- Add Author Modal EventListeners ------------------------------- */

addAuthorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(addAuthorForm);
  const authorName = formData.get("name");
  const authorNationality = formData.get("nationality");

  console.log("New Author Added:", { authorName, authorNationality });

  addAuthorModal.classList.remove("flex");
  addAuthorModal.classList.add("hidden");

  addAuthorForm.reset();
});

openAddAuthorBtn.addEventListener("click", () => {
  addAuthorModal.classList.remove("hidden");
  addAuthorModal.classList.add("flex");
});

closeAddAuthorBtn.addEventListener("click", () => {
  addAuthorModal.classList.remove("flex");
  addAuthorModal.classList.add("hidden");
});

cancelAddAuthorBtn.addEventListener("click", () => {
  addAuthorModal.classList.remove("flex");
  addAuthorModal.classList.add("hidden");
  addAuthorForm.reset();
});

addAuthorModal.addEventListener("click", (event) => {
  if (event.target === addAuthorModal) {
    addAuthorModal.classList.remove("flex");
    addAuthorModal.classList.add("hidden");
    addAuthorForm.reset();
  }
});

/* ------------------------------- Show Author's Books Modal EventListeners ------------------------------- */

window.openAuthorBooksModal = (authorId) => {
  const authorsBooks = library.books.filter(
    (book) => book.authorId === authorId
  );
  console.log("Author's Books:", authorsBooks);

  showAuthorBooksModal.classList.remove("hidden");
  showAuthorBooksModal.classList.add("flex");

  authorBooksContainer.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    authorsBooks.forEach((book) => {
      const authorBookRowHTML = AuthorBookRow(book.title, book.isbn, book.status);
      authorBooksContainer.innerHTML += authorBookRowHTML;
    });
  }
};

closeShowAuthorBooksBtn.addEventListener("click", () => {
  showAuthorBooksModal.classList.remove("flex");
  showAuthorBooksModal.classList.add("hidden");
});

showAuthorBooksModal.addEventListener("click", (event) => {
  if (event.target === showAuthorBooksModal) {
    showAuthorBooksModal.classList.remove("flex");
    showAuthorBooksModal.classList.add("hidden");
  }
});
