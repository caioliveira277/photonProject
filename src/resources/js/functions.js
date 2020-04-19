const { auth, gallery } = require("./globals");

async function FetchApi(url) {
  const dataFetch = await fetch(`https://api.pexels.com/v1/${url}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  return dataFetch.json();
}
function RenderPhotos(data) {
  data.photos.forEach((photo) => {
    const figure = document.createElement("figure");
    figure.innerHTML = `
    <img src=${photo.src.large}>
    <figcaption>${photo.photographer}</figcaption>
    <a href=${photo.src.original}>Download</a>
  `;
    gallery.appendChild(figure);
  });
}
function CuratedPhotos() {
  FetchApi(`curated?per_page=15&page=1`)
    .then((data) => RenderPhotos(data))
    .catch((error) => console.error(error));
}

function SearchPhotos(query) {
  FetchApi(`search?query=${query}+query&per_page=15&page=1`)
    .then((data) => RenderPhotos(data))
    .catch((error) => console.error(error));
}

function ClearPhotos() {
  gallery.innerHTML = "";
}

/* Startup */
CuratedPhotos();

module.exports = { SearchPhotos, ClearPhotos };
