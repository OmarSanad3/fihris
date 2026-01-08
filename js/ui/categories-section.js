import { calcCategoriesStats } from "../ui/utils/statistics.js";
import Category from "./components/Category.js";

const categoriesContainer = document.getElementById(
  "categories-cards-container"
);

const categoryColors = [
  {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
  },
  {
    bg: "bg-purple-50 dark:bg-purple-900/20",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
  },
  {
    bg: "bg-green-50 dark:bg-green-900/20",
    text: "text-green-600 dark:text-green-400",
    border: "border-green-200 dark:border-green-800",
  },
  {
    bg: "bg-orange-50 dark:bg-orange-900/20",
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-800",
  },
  {
    bg: "bg-pink-50 dark:bg-pink-900/20",
    text: "text-pink-600 dark:text-pink-400",
    border: "border-pink-200 dark:border-pink-800",
  },
  {
    bg: "bg-cyan-50 dark:bg-cyan-900/20",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-200 dark:border-cyan-800",
  },
];

export const render = () => {
  const stats = calcCategoriesStats();
  categoriesContainer.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    categoriesContainer.insertAdjacentHTML("beforeend", 
      Category(
        stats[i].category,
        stats[i].totalBooks,
        stats[i].numOfAvailableBooks,
        stats[i].numOfBorrowedBooks,
        categoryColors[i].border,
        categoryColors[i].text,
        categoryColors[i].bg
      )
    )
  }
};

render();
