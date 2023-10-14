const apiKey = process.env.REACT_APP_API_KEY;

export async function fetchItems() {
  const resp = await fetch("https://imdb-top-100-movies.p.rapidapi.com/", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
    },
  });
  if (resp.ok) {
    return await resp.json();
  }
  throw new Error("404: Failed to fetch data!");
}
