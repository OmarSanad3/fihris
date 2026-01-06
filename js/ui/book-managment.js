const addBookModal = document.getElementById("add-book-modal");
const openAddBookBtn = document.getElementById("open-add-book-btn");
const closeAddBookBtn = document.getElementById("close-add-book-btn");
const cancelAddBookBtn = document.getElementById("cancel-add-book-btn");
const addBookForm = document.getElementById("add-book-form");


/* ------------------------------- Add Book Form ------------------------------- */

addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(addBookForm);
  const bookTitle = formData.get("bookTitle");
  const author = formData.get("author");

  console.log("New Book Added:", { bookTitle, author });

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
