import env from "react-dotenv";

async function getAllBeer(page) {
  const response = await fetch(
    env.PUNK_API_URL + "/beers?page=" + page
  );
  const data = await response.json();
  return data;
}

async function getOneBeer(id) {
  const response = await fetch(env.PUNK_API_URL + "/beers/" + id);
  const data = await response.json();
  return data;
}

export { getAllBeer, getOneBeer };
