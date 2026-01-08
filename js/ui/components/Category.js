export default function (
  categoryName,
  numOfTotalBooks,
  numOfAvailable,
  numOfBorrowed,
  borderColors,
  iconColors,
  iconBgColors
) {
  return `
    <div class="bg-white dark:bg-gray-800 p-6 border ${borderColors} rounded-lg">
      <div class="flex items-start gap-4">
        <div class="${iconBgColors} p-3 rounded-lg">
          <i class="${iconColors} text-2xl fa-regular fa-folder-open"></i>
        </div>
        <div class="flex-1">
          <h3 class="flex-1 mb-2 text-gray-900 dark:text-white">${categoryName}</h3>
          <div class="space-y-1">
            <p class="text-gray-600 dark:text-gray-400">
              <span id="tot-fiction-books" class="font-medium">${numOfTotalBooks}</span>
              total books
            </p>
            <div class="flex gap-4 text-sm">
              <span class="text-green-600 dark:text-green-400">
                <span id="available-fiction-books">${numOfAvailable}</span>
                Available
              </span>
              <span class="text-orange-600 dark:text-orange-400">
                <span id="borrowed-fiction-books">${numOfBorrowed}</span>
                Borrowed
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
