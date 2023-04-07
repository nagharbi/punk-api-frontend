import env from "react-dotenv";

const punkApiUrl = "https://api.punkapi.com/v2";

async function getAllBeer(page) {
  const response = await fetch(
    punkApiUrl + "/beers?page=" + page
  );
  const data = await response.json();
  return data;
}

async function getOneBeer(id) {
  const response = await fetch(punkApiUrl + "/beers/" + id);
  const data = await response.json();
  return data[0];
}

export { getAllBeer, getOneBeer };
