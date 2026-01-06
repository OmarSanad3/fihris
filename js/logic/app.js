import Library from "./classes/Library.js";
import generateLibraryData from "./utils/generate-library-data.js";
import { getLibraryData, saveLibraryData } from "../store/library-storage.js";

const library = new Library();

let libraryData = getLibraryData();

if (libraryData) {
  library.authors = libraryData.authors;
  library.books = libraryData.books;
  
} else {
  libraryData = generateLibraryData();
  library.authors = libraryData.authors;
  library.books = libraryData.books;
  saveLibraryData(library);
}

window.library = library; // For debugging purposes
