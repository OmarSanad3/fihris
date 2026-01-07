export default function BookRow(bookId,bookTitle, bookISBN, bookAuthorName, bookAuthorId, bookCategory, bookStatus) {
  const rowId = `book-row-${bookId}`;
  const formId = `form-${bookId}`;

  return `
    <form id="${formId}" style="display:none;"></form>

    <tr id="${rowId}" data-editing="false" class="group">
    
      <td class="td-first group-data-[editing=true]:hidden">${bookTitle}</td>
      <td class="td-first group-data-[editing=false]:hidden">
        <input form=${formId} type="text" name="title" class="form-input" value="${bookTitle}" required>
      </td>

      <td class="td-first group-data-[editing=true]:hidden">${bookISBN}</td>
      <td class="td-first group-data-[editing=false]:hidden">
        <input form=${formId} type="text" name="isbn" class="form-input" value="${bookISBN}" required>
      </td>

      <td class="td-first group-data-[editing=true]:hidden">${bookAuthorName}</td>
      <td class="td-first group-data-[editing=false]:hidden">
        <select form=${formId} id="select-author-edit-book-${bookId}" name="author" class="form-input" required>
          <option value="" disabled>Select an author</option>
        </select>
      </td>

      <td class="td-element group-data-[editing=true]:hidden">${bookCategory}</td>
      <td class="td-first group-data-[editing=false]:hidden">
        <select form=${formId} id="select-category-edit-book-${bookId}" name="category" class="form-input" required>
          <option value="" disabled>Select a category</option>
        </select>
      </td>

      <td class="group-data-[editing=true]:hidden group td-element" data-status="${bookStatus.toLowerCase()}">
        <span
          class="hidden group-data-[status=available]:inline bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full text-green-700 dark:text-green-400 text-xs">
          Available
        </span>
        <span
          class="hidden group-data-[status=borrowed]:inline bg-orange-100 dark:bg-orange-900/20 px-2 py-1 rounded-full text-orange-700 dark:text-orange-400 text-xs">
          Borrowed
        </span>
      </td>
      <td class="td-first group-data-[editing=false]:hidden">
        <select form=${formId} id="select-status-edit-book-${bookId}" name="status" class="form-input" required>
          <option value="" disabled>Select a status</option>
        </select>
      </td>

      <td class="gap-2 td-element">
        <div class="flex justify-evenly items-center gap-3">
          <button
            onclick="editBook('${rowId}')"
            class="group-data-[editing=true]:hidden cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded-lg text-blue-600 dark:text-blue-400">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button
            onclick="deleteBook('${rowId}')"
            class="group-data-[editing=true]:hidden cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded-lg text-red-600 dark:text-red-400">
            <i class="fa-regular fa-trash-can"></i>
          </button>

          <button
            type="submit"
            form="${formId}"
            class="group-data-[editing=false]:hidden cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded-lg text-blue-600 dark:text-blue-400">
            Save
          </button>
          <button
            onclick="cancelBook('${rowId}')"
            class="group-data-[editing=false]:hidden cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded-lg text-red-600 dark:text-red-400">
            Cancel
          </button>
        </div>
      </td>
    </tr>
  `
}