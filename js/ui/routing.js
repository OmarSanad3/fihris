import { render as renderBookPage } from "../ui/book-managment.js";

const [
  dashboardSectionEle,
  booksSectionEle,
  authorsSectionEle,
  categoriesSectionEle,
  settingsSectionEle,
] = [
  document.getElementById("dashboard-section"),
  document.getElementById("books-section"),
  document.getElementById("authors-section"),
  document.getElementById("categories-section"),
  document.getElementById("settings-section"),
];

const [
  goToDashboardBtn,
  goToBooksBtn,
  goToAuthorsBtn,
  goToCategoriesBtn,
  goToSettingsBtn,
] = [
  document.getElementById("go-to-dashboard-section"),
  document.getElementById("go-to-books-section"),
  document.getElementById("go-to-authors-section"),
  document.getElementById("go-to-categories-section"),
  document.getElementById("go-to-settings-section"),
];

const sectionTitleEle = document.getElementById("section-title");

window.navigateTo = (section) => {
  (() => {
    dashboardSectionEle.classList.add("hidden");
    booksSectionEle.classList.add("hidden");
    authorsSectionEle.classList.add("hidden");
    categoriesSectionEle.classList.add("hidden");
    settingsSectionEle.classList.add("hidden");

    goToDashboardBtn.classList.remove("active");
    goToBooksBtn.classList.remove("active");
    goToAuthorsBtn.classList.remove("active");
    goToCategoriesBtn.classList.remove("active");
    goToSettingsBtn.classList.remove("active");
  })();

  window.closeSideBar();

  switch (section) {
    case "dashboard-section":
      dashboardSectionEle.classList.remove("hidden");
      goToDashboardBtn.classList.add("active");
      sectionTitleEle.textContent = "Dashboard";
      break;
    case "books-section":
      booksSectionEle.classList.remove("hidden");
      goToBooksBtn.classList.add("active");
      sectionTitleEle.textContent = "Books Management";
      renderBookPage();
      break;
    case "authors-section":
      authorsSectionEle.classList.remove("hidden");
      goToAuthorsBtn.classList.add("active");
      sectionTitleEle.textContent = "Authors Management";
      break;
    case "categories-section":
      categoriesSectionEle.classList.remove("hidden");
      goToCategoriesBtn.classList.add("active");
      sectionTitleEle.textContent = "Categories";
      break;
    case "settings-section":
      settingsSectionEle.classList.remove("hidden");
      goToSettingsBtn.classList.add("active");
      sectionTitleEle.textContent = "Settings";
      break;
    default:
      return window.navigateTo("dashboard-section");
  }

  // add to the url ?section=section
  const url = new URL(window.location);
  url.searchParams.set("section", section);
  window.history.pushState({}, "", url);
};

(() => {
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get("section") || "books-section";
  window.navigateTo(section);
})();
