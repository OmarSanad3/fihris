import {
  calcDiagram1sData,
  calcDiagram2sData,
  calcStatsForDashboard,
} from "../ui/utils/statistics.js";
import Stats from "./components/Stats.js";

const dashboardStatsContainer = document.getElementById(
  "dashboard-stats-container"
);

const ctx = document.getElementById("bookPerCategory").getContext("2d");
const ctx2 = document.getElementById("borrowedVSAvailable").getContext("2d");

const statsStyle = [
  {
    icon: `<i class="text-blue-600 dark:text-blue-400 text-2xl fa-solid fa-swatchbook"></i>`,
    iconBgColor: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    icon: `<i class="text-purple-600 dark:text-purple-400 text-2xl fa-solid fa-user-group"></i>`,
    iconBgColor: "bg-purple-50 dark:bg-purple-900/20",
  },
  {
    icon: `<i class="text-green-600 dark:text-green-400 text-2xl fa-solid fa-book-open"></i>`,
    iconBgColor: "bg-green-50 dark:bg-green-900/20",
  },
  {
    icon: `<i class="text-orange-600 dark:text-orange-400 text-2xl fa-solid fa-arrow-trend-up"></i>`,
    iconBgColor: "bg-orange-50 dark:bg-orange-900/20",
  },
];

export const render = () => {
  const statsData = calcStatsForDashboard();

  dashboardStatsContainer.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    dashboardStatsContainer.insertAdjacentHTML(
      "beforeend",
      Stats(
        statsData[i].title,
        statsStyle[i].icon,
        statsStyle[i].iconBgColor,
        statsData[i].value
      )
    );
  }

  buildChart1();
  buildChart2();
};
render();

/* ---------------- Diagrams ---------------- */
// 3. Initialize the Chart

function buildChart1() {
  const { categoriesNames, booksPerCategory } = calcDiagram1sData();

  const isDarkMode = document.documentElement.classList.contains("dark");

  // Color variables for readability
  const labelColor = isDarkMode ? "#94a3b8" : "#64748b"; // slate-400 : slate-500
  const gridColor = isDarkMode
    ? "rgba(255, 255, 255, 0.1)"
    : "rgba(0, 0, 0, 0.05)";

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: categoriesNames,
      datasets: [
        {
          label: "# of Books",
          data: booksPerCategory,
          backgroundColor: [
            "#155DFC",
            "#9810FA",
            "#00A63E",
            "#F54A00",
            "#E60076",
            "#0092B8",
          ],
          borderRadius: 6,
          borderWidth: 0, // Borders usually look messy on modern bars
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          border: { display: false }, // Hides the axis line
          ticks: {
            color: labelColor, // Updates numbers on Y axis
            padding: 10,
          },
          grid: {
            color: gridColor,
            drawTicks: false, // Cleaner look
          },
        },
        x: {
          border: { display: false },
          ticks: {
            color: labelColor, // Updates category names on X axis
          },
          grid: {
            display: false,
          },
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: isDarkMode ? "#1e293b" : "#ffffff",
          titleColor: isDarkMode ? "#ffffff" : "#1e293b",
          bodyColor: isDarkMode ? "#cbd5e1" : "#475569",
          borderColor: isDarkMode ? "#334155" : "#e2e8f0",
          borderWidth: 1,
        },
      },
    },
  });
}

function buildChart2() {
  const { categoriesNames, booksPerCategory } = calcDiagram2sData();

  const isDarkMode = document.documentElement.classList.contains("dark");
  const textColor = isDarkMode ? "#f8fafc" : "#1e293b"; // slate-50 and slate-800

  new Chart(ctx2, {
    type: "pie", // Change this to 'line' or 'pie' to see magic happen
    data: {
      labels: categoriesNames,
      datasets: [
        {
          label: "# of Books",
          data: booksPerCategory,
          backgroundColor: ["#00A63E", "#F54A00"],
          borderColor: ["#00A63E", "#F54A00"],
          // borderWidth: 2,
          // borderColor: isDarkMode ? "#030712" : "#ffffff",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            color: textColor,
            font: {
              size: 14,
            },
          },
        },
      },
    },
  });
}
