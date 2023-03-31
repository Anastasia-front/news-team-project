const axios = require("axios").default;

const KEY_URL = "h82LSxHnwytWrbBDAaEM0yRoLcpNOT6L";
const BASE_URL = "https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json";

export async function getNews() {
  const params = {
    "api-key": KEY_URL,
  };
  const request = await axios.get(BASE_URL, { params });

  const response = await request.data.results;
  // console.log(response);
  return response;
}
