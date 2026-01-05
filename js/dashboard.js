// 1. Define your data
const categories = ["Fiction", "Sci-Fi", "History", "Cooking", "Mystery"];
const bookCounts = [12, 19, 7, 5, 14];

// 2. Get the context of the canvas
const ctx = document.getElementById("bookPerCategory").getContext("2d");
const ctx2 = document.getElementById("borrowedVSAvailable").getContext("2d");


// 3. Initialize the Chart
new Chart(ctx, {
  type: "bar", // Change this to 'line' or 'pie' to see magic happen
  data: {
    labels: categories,
    datasets: [
      {
        label: "# of Books",
        data: bookCounts,
        backgroundColor: [
          "rgba(99, 102, 241, 0.5)", // Indigo
          "rgba(20, 184, 166, 0.5)", // Teal
          "rgba(245, 158, 11, 0.5)", // Amber
          "rgba(239, 68, 68, 0.5)", // Red
          "rgba(168, 85, 247, 0.5)", // Purple
        ],
        borderColor: [
          "rgb(99, 102, 241)",
          "rgb(20, 184, 166)",
          "rgb(245, 158, 11)",
          "rgb(239, 68, 68)",
          "rgb(168, 85, 247)",
        ],
        borderWidth: 2,
        borderRadius: 6, // Rounds the top of the bars
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, // Allows it to follow our Tailwind height
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)", // Makes the lines very subtle
          drawBorder: false, // Removes the solid line on the far left
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hides the "label" box since our title is in HTML
      },
    },
  },
});

new Chart(ctx2, {
  type: "bar", // Change this to 'line' or 'pie' to see magic happen
  data: {
    labels: categories,
    datasets: [
      {
        label: "# of Books",
        data: bookCounts,
        backgroundColor: [
          "rgba(99, 102, 241, 0.5)", // Indigo
          "rgba(20, 184, 166, 0.5)", // Teal
          "rgba(245, 158, 11, 0.5)", // Amber
          "rgba(239, 68, 68, 0.5)", // Red
          "rgba(168, 85, 247, 0.5)", // Purple
        ],
        borderColor: [
          "rgb(99, 102, 241)",
          "rgb(20, 184, 166)",
          "rgb(245, 158, 11)",
          "rgb(239, 68, 68)",
          "rgb(168, 85, 247)",
        ],
        borderWidth: 2,
        borderRadius: 6, // Rounds the top of the bars
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false, // Allows it to follow our Tailwind height
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
          color: "rgba(0, 0, 0, 0.05)", // Makes the lines very subtle
          drawBorder: false, // Removes the solid line on the far left
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hides the "label" box since our title is in HTML
      },
    },
  },
});
