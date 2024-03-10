const searchBtn = document.getElementById("search-btn");
const searchInput = document.querySelector(".search-input");
const mainEl = document.querySelector("main");

searchBtn.addEventListener("click", function () {
  searchInput.classList.toggle("active-search");
});

mainEl.addEventListener("click", () => {
  searchInput.classList.remove("active-search");
});
