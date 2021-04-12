import View from "./View.js";

class FilterView extends View {
  _parentElement = document.querySelector(".filter");

  addHandlerFilter(handler) {
    this._parentElement.addEventListener("change", handler);
  }

  _generateCards(data) {
    return `
    <div class="card">
      <button class="card__detail" data-name= "${data.name}">
      <img
        src="${data.flag}"
        alt="${data.name}"
        class="image card__image"
      />
      <div class="card__text">
        <h3 class="card__name">${data.name}</h3>
        <div class="card__info card__population">
          <span id="strong">Population:</span>
          <span>${(data.population / 1000000).toFixed(2)} Mil </span>
        </div>
        <div class="card__info card__region">
          <span id="strong">Region: </span>
          <span>${data.region}</span>
        </div>
        <div class="card__info card__capital">
          <span id="strong">Capital: </span>
          <span>${data.capital}</span>
        </div>
      </div>
      </button>
    </div>
    `;
  }
}

export default new FilterView();
