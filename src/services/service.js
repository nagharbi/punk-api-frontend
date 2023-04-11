const punkApiUrl = "https://api.punkapi.com/v2";

async function getAllBeer(page) {
  const response = await fetch(punkApiUrl + "/beers?page=" + page);
  const data = await response.json();
  return data;
}

async function getOneBeer(id) {
  const response = await fetch(punkApiUrl + "/beers/" + id);
  const data = await response.json();
  return data[0];
}

async function getBeersByFilters(filters) {
  let params = [];
  for (const [key, value] of Object.entries(filters)) {
    if (value != 0) {
      params.push(`${key}=${value}`);
    }
  }

  const response = await fetch(punkApiUrl + "/beers?" + params.join("&"));
  const data = await response.json();
  return data;
}

export { getAllBeer, getOneBeer, getBeersByFilters };
