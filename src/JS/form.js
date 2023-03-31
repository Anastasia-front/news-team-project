const searchInput = document.querySelector(".search-input");
const openBtn = document.querySelector(".open-input");
const icon = document.querySelector(".search-icon__svg");
const form = document.querySelector(".search-form");
openBtn.addEventListener("submit", onSearch);
icon.addEventListener("click", showInput);
window.addEventListener("resize", checkSize);
checkSize();
let searchQuery = "";
const axios = require("axios").default;

async function fetchArticles() {
  const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  const params = {
    "api-key": "h82LSxHnwytWrbBDAaEM0yRoLcpNOT6L",
    q: `${searchQuery}`,
  };

  const request = await axios.get(BASE_URL, { params });
  const response = await request.data;

  return response;
}

form.addEventListener("submit", onSearch);

async function onSearch(e) {
  e.preventDefault();
  searchQuery = searchInput.value.trim();

  if (searchQuery === "") {
    console.log("упс");
    return;
  }
  await fetchArticles(searchQuery);
}

function checkSize() {
  if (document.documentElement.clientWidth < 768) {
    searchInput.classList.add("visually-hidden");
    window.removeEventListener("resize", checkSize);
  } else {
    searchInput.classList.remove("visually-hidden");
  }
}

function showInput() {
  searchInput.classList.remove("visually-hidden");
  icon.classList.add("search-icon__active");
}
