const { searchInput, form, searchValue } = require("./globals");
const { SearchPhotos, ClearPhotos } = require("./functions");

searchInput.addEventListener("change", (event) => {
  searchValue.pop();
  searchValue.push(event.target.value);
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  ClearPhotos();
  SearchPhotos(searchValue.join(""));
})