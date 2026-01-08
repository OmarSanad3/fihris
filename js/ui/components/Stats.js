export default function (
  title = "Total Books",
  icon = `<i class="text-blue-600 dark:text-blue-400 text-2xl fa-solid fa-book-open"></i>`,
  iconBgColor = "bg-blue-50 dark:bg-blue-900/20",
  value = 10,
) {
  return `
    <div
      class="flex flex-1 justify-between items-center gap-10 bg-white dark:bg-gray-800 p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
      <div class="flex flex-col">
        <p class="mb-1 text-gray-600 dark:text-gray-400">${title}</p>
        <p class="text-gray-900 dark:text-white">${value}</p>
      </div>
      <div class="${iconBgColor} p-3 rounded-lg">
        ${icon}
      </div>
    </div>
  `
}