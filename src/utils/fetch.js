export default function fetchDataFromUrl(url) {
  if (url === null) {
    throw new Error('Missing or invalid URL for data fetching."');
  }

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      throw error;
    });
}
