import { library } from "../logic/app.js";
import Author from "../logic/classes/Author.js";
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
const authorBooksContainer = document.getElementById("author-books-container");

const authorsTableBody = document.getElementById("authors-table-body");

/* Rendering Logic */

export const render = () => {
  authorsTableBody.innerHTML = "";
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
};
render();

/* ------------------------------- Add Author Modal EventListeners ------------------------------- */

addAuthorForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(addAuthorForm);
  const authorName = formData.get("name");
  const authorNationality = formData.get("nationality");

  console.log("New Author Added:", { authorName, authorNationality });

  addAuthorModal.classList.remove("flex");
  addAuthorModal.classList.add("hidden");

  const newAuthor = new Author(authorName, authorNationality);
  library.addAuthor(newAuthor);

  render();
  
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

  authorsBooks.forEach((book) => {
    const authorBookRowHTML = AuthorBookRow(book.title, book.isbn, book.status);
    authorBooksContainer.innerHTML += authorBookRowHTML;
  });
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

/* ------------------------------- Edit an author ------------------------------- */

function disableEditingInAllRow() {
  document
    .querySelectorAll("#authors-table-body tr")
    .forEach((ele) => (ele.dataset["editing"] = "false"));
}

window.editAuthor = (rowId) => {
  disableEditingInAllRow();
  const authorId = rowId.split("-").splice(2, 1000).join("-");

  document.getElementById(rowId).dataset.editing = "true";

  const editAuthorForm = document.getElementById(`form-${authorId}`);
  editAuthorForm.addEventListener("submit", (event) => {
    try {
      event.preventDefault();

      const formData = new FormData(editAuthorForm);

      const name = formData.get("name");
      const nationality = formData.get("nationality");

      const updatedAuthor = {};
      if (name) updatedAuthor.name = name;
      if (nationality) updatedAuthor.nationality = nationality;

      library.updateAuthor(authorId, updatedAuthor);
      render();

      document.getElementById(rowId).dataset.editing = "false";
    } catch (err) {
      window.alert(err.message);
    }
  });
};

window.cancelAuthor = (rowId) => {
  document.getElementById(rowId).dataset.editing = "false";
  render();
};

window.deleteAuthor = (rowId) => {
  try {
    const authorId = rowId.split("-").splice(2, 1000).join("-");
    library.removeAuthor(authorId);
    render();
  } catch (err) {
    window.alert(err.message);
  }
};
