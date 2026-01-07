const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebar-overlay");
const openBtn = document.getElementById("menu-toggle");

function toggleSidebar() {
  sidebar.classList.toggle("-translate-x-full");
  overlay.classList.toggle("hidden");
}

window.closeSideBar = () => {
  const isMobile = window.innerWidth < 768;
  const isOpen = !sidebar.classList.contains("-translate-x-full");

  if (isMobile && isOpen) {
    toggleSidebar();
  }
};

// Open when clicking the hamburger menu
openBtn.addEventListener("click", toggleSidebar);

// Close when clicking the shaded area (overlay)
overlay.addEventListener("click", toggleSidebar);
