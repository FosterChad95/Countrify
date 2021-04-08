import View from "./View.js";
class SearchView extends View {
  _parentElement = document.querySelector(".search");
  _errorMessage = "That is not a valid country please try again!";

  getSearch() {
    const query = this._parentElement.querySelector(".search__input").value;
    this.clearSearch();
    return query;
  }

  clearSearch() {
    this._parentElement.querySelector(".search__input").value = "";
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
