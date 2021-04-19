import View from "./View.js";
class SearchView extends View {
  _parentElement = document.querySelector(".search");
  _errorMessage = "That is not a valid country please try again!";
  _searchInput = document.querySelector(".search__input");
  _list = document.querySelector(".search__list");

  _blur() {
    this._searchInput.blur();
  }

  addHandlerDropdown(handler) {
    ["change", "keyup"].forEach((e) =>
      this._searchInput.addEventListener(e, handler)
    );
  }

  addHandlerList(handler) {
    this._list.addEventListener("click", function (e) {
      const btn = e.target.closest(".search__item");
      handler(btn);
    });
  }

  filterDropdown(val, countries) {
    const regex = new RegExp(val, "gi");
    return countries.filter((c) => {
      return c.name.match(regex);
    });
  }

  addDropdownMarkup(vals, typed) {
    const html = vals
      .map((place) => {
        const regex = new RegExp(typed, "gi");
        const countryName = place.name.replace(
          regex,
          `<span class="hl">${typed}</span>`
        );
        return `
      <button class='search__button'><li class="search__item" data-id="${place.name}">${countryName}</li></button>`;
      })
      .join("");
    this._list.innerHTML = html;
  }
  getSearch() {
    const query = this._parentElement.querySelector(".search__input").value;
    this.clearSearch();
    return query;
  }

  clearSearch() {
    this._parentElement.querySelector(".search__input").value = "";
    this._btn.innerHTML = "";
    this._list.innerHTML = "";
    this._blur();
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
