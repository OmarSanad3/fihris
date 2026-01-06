export default function AuthorRow(authorId,authorName, authorNationality, numOfAuthorBooks) {  
  return `
    <tr>
      <td class="td-first">${authorName}</td>
      <td class="td-element">${authorNationality}</td>
      <td class="td-element">
        <button
          onclick="openAuthorBooksModal('${authorId}')"
          class="items-center gap-2 bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30 px-3 py-1.5 rounded-lg text-blue-600 dark:text-blue-400 transition-colors">
          <i class="fa-solid fa-eye"></i>
          <span>View Books (${numOfAuthorBooks})</span>
        </button>
      </td>
      <td class="gap-2 td-element">
        <div class="flex justify-evenly items-center gap-3">
          <button
            class="hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded-lg text-blue-600 dark:text-blue-400">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button
            class="hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded-lg text-red-600 dark:text-red-400">
            <i class="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `
}