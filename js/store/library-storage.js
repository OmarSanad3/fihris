export const getLibraryData = () => {
  const data = localStorage.getItem("library-data");
  return data ? JSON.parse(data) : null;
}

export const saveLibraryData = (library) => {
  const data = {
    books: library.books,
    authors: library.authors,
  };
  localStorage.setItem("library-data", JSON.stringify(data));
}

export const clearLibraryData = () => {
  localStorage.removeItem("library-data");
}
