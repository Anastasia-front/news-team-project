const KEY_URL = "h82LSxHnwytWrbBDAaEM0yRoLcpNOT6L";
const BASE_URL = "https://api.nytimes.com/svc/news/v3/content/nyt/";

export async function fetchImages(value, page) {
  try {
    const response = await fetch(
      `${BASE_URL}${value}&api-key=${KEY_URL}&page=${page}`
    );
    const result = await response.json();
    // const newCard = result.data;
    // console.log(newCard);
    return result;
  } catch (error) {
    console.log(error);
  }
}
