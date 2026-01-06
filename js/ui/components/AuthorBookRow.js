export default function AuthorBookRow(title, isbn, status) {
  return `
      <div class="flex justify-between items-center bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
        <div>
          <p class="text-gray-900 dark:text-white">${title}</p>
          <p class="text-gray-500 dark:text-gray-400 text-sm">${isbn}</p>
        </div>
        <div class="group" data-status="${status.toLowerCase()}">
          <span
            class="hidden group-data-[status=available]:inline bg-green-100 dark:bg-green-900/20 px-2 py-1 rounded-full text-green-700 dark:text-green-400 text-xs">
            Available
          </span>
          <span
            class="hidden group-data-[status=borrowed]:inline bg-orange-100 dark:bg-orange-900/20 px-2 py-1 rounded-full text-orange-700 dark:text-orange-400 text-xs">
            Borrowed
          </span>
        </div>
      </div>
  `
}