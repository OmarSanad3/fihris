export default function AuthorRow(
  authorId,
  authorName,
  authorNationality,
  numOfAuthorBooks
) {
  const rowId = `author-row-${authorId}`;
  const formId = `form-${authorId}`;

  return `
    <form id="${formId}" style="display:none;"></form>

    <tr id="${rowId}" data-editing="false" class="group">
      <td class="td-first group-data-[editing=true]:hidden">${authorName}</td>
      <td class="td-first group-data-[editing=false]:hidden">
        <input form=${formId} type="text" name="name" class="form-input" value="${authorName}" required>
      </td>

      <td class="td-element group-data-[editing=true]:hidden">${authorNationality}</td>
      <td class="td-first group-data-[editing=false]:hidden">
        <input form=${formId} type="text" name="nationality" class="form-input" value="${authorNationality}" required>
      </td>

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
            onclick="editAuthor('${rowId}')"
            class="group-data-[editing=true]:hidden cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded-lg text-blue-600 dark:text-blue-400">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button
            onclick="deleteAuthor('${rowId}')"
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
            onclick="cancelAuthor('${rowId}')"
            class="group-data-[editing=false]:hidden cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 p-2 rounded-lg text-red-600 dark:text-red-400">
            Cancel
          </button>
        </div>
      </td>
    </tr>
  `;
}
