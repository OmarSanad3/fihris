export default function BookRow(bookTitle, bookISBN, bookAuthor, bookCategory, bookStatus) {
  return `
    <tr>
      <td class="td-first">${bookTitle}</td>
      <td class="td-element">${bookISBN}</td>
      <td class="td-element">${bookAuthor}</td>
      <td class="td-element">${bookCategory}</td>
      <td class="group td-element" data-status="${bookStatus.toLowerCase()}">
        <span
          class="hidden group-data-[status=available]:inline bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full text-green-700 dark:text-green-400 text-xs">
          Available
        </span>
        <span
          class="hidden group-data-[status=borrowed]:inline bg-orange-100 dark:bg-orange-900/20 px-2 py-1 rounded-full text-orange-700 dark:text-orange-400 text-xs">
          Borrowed
        </span>
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