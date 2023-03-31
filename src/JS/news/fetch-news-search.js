const KEY_URL = "h82LSxHnwytWrbBDAaEM0yRoLcpNOT6L";
const BASE_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";

export async function fetchImages(value, page) {
  try {
    let dateForUrl = "";
    const storedDate = localStorage.getItem("date");
    if (storedDate) {
      const date = new Date(storedDate);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      dateForUrl = `&begin_date=${year}${month}${day}&end_date=${year}${month}${day}`;
    } else {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, "0");
      const day = today.getDate().toString().padStart(2, "0");
      dateForUrl = `&begin_date=${year}${month}${day}&end_date=${year}${month}${day}`;
    }
    const response = await fetch(
      `${BASE_URL}${value}&api-key=${KEY_URL}&page=${page}${dateForUrl}`
    );
    const newCard = await response.json();
    return newCard;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchImagesHits(value) {
  try {
    let dateForUrl = "";
    const storedDate = localStorage.getItem("date");
    if (storedDate) {
      const date = new Date(storedDate);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      dateForUrl = `&begin_date=${year}${month}${day}&end_date=${year}${month}${day}`;
    } else {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, "0");
      const day = today.getDate().toString().padStart(2, "0");
      dateForUrl = `&begin_date=${year}${month}${day}&end_date=${year}${month}${day}`;
    }
    const response = await fetch(`${BASE_URL}${value}&api-key=${KEY_URL}`);
    const newCard = await response.json();
    return newCard;
  } catch (error) {
    console.log(error);
  }
}
