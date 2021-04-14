import View from "./View.js";

class DetailView extends View {
  _element = document.querySelector(".card__container");
  _search = document.querySelector(".search");
  _filter = document.querySelector(".filter");

  _hideMain() {
    [this._search, this._filter].forEach((e) => (e.innerHTML = ""));
  }

  goBack(url) {
    window.onpopstate = function (event) {
      window.location.href = url;
    };
    const btn = document.querySelector(".detail__button");
    btn.addEventListener("click", () => history.back());
  }

  _renderDetail(data) {
    if (!data) this.renderError;
    const markup = this._generateCards(data);
    console.log(markup);
    this._element.innerHTML = "";
    this._element.insertAdjacentHTML("afterbegin", markup);
  }
  _bordersDetail(data) {
    const el = document.querySelector(".detail__description--border");
    data.borders.forEach((dat) => {
      const markup = `<span class="country">${dat}</span>`;
      el.insertAdjacentHTML("beforeend", markup);
    });
  }
  _generateCards(data) {
    return `
    <div class="detail hidden">
    <button class="detail__button">&larr; &nbsp; Back</button>
    <div class="detail__body">
      <div class="detail__image">
        <img
          src="${data.flag}"
          alt="${data.name}"
          class="img"
        />
      </div>
      <div class="detail__description">
        <h1 class="detail__description--header">${data.name}</h1>

        <ul class="detail__description--list1">
          <li class="detail__description--item">
            <span id="strong">Native Name:</span> <span>${
              data.nativeName
            }</span>
          </li>
          <li class="detail__description--item">
            <span id="strong">Population:</span> <span>${(
              data.population / 1000000
            ).toFixed(3)} Million</span>
          </li>
          <li class="detail__description--item">
            <span id="strong">Region:</span> <span>${data.region}</span>
          </li>
          <li class="detail__description--item">
            <span id="strong">Sub Region</span> <span>${data.subregion}</span>
          </li>
          <li class="detail__description--item">
            <span id="strong">Capital:</span> <span>${data.capital}</span>
          </li>
        </ul>
        <ul class="detail__description--list2">
          <li class="detail__description--item">
            <span id="strong">Top Level Domain:</span> <span>${
              data.topLevelDomain
            }</span>
          </li>
          <li class="detail__description--item">
            <span id="strong">Currencies:</span> <span>${
              data.currencies.length > 1
                ? data.currencies.map((curr) => curr.code).join(", ")
                : data.currencies[0].code
            }</span>
          </li>
          <li class="detail__description--item">
            <span id="strong">${
              data.languages.length > 1 ? "Languages:" : "Language:"
            }</span> <span>${
      data.languages.length > 1
        ? data.languages.map((curr) => curr.name).join(", ")
        : data.languages[0].name
    }</span>
          </li>
        </ul>

        <div class="detail__description--border">
          <span id="strong">Border Countries: </span>
        </div>
      </div>
    </div>
  </div>`;
  }

  addDetailHandler(handler) {
    this._element.addEventListener("click", function (e) {
      const btn = e.target.closest(".card__detail");
      if (!btn) return;
      handler(btn);
    });
  }
}

export default new DetailView();
