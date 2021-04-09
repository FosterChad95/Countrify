import View from "./View.js";

class DetailView {
  _element = document.querySelector(".card__container");
  _search = document.querySelector(".search");
  _filter = document.querySelector(".filter");
  _hideMain() {
    [this._element, this._search, this._filter].forEach(
      (e) => (e.innerHTML = "")
    );
  }
  _renderDetail(data) {
    return `
    <div class="detail hidden">
    <button class="detail__button">&larr; &nbsp; Back</button>
    <div class="detail__body">
      <div class="detail__image">
        <img
          src="https://cdn.britannica.com/08/6408-004-405E272F/Flag-Belgium.jpg"
          alt="belgium"
          class="img"
        />
      </div>
      <div class="detail__description">
        <h1 class="detail__description--header">Belgium</h1>

        <ul class="detail__description--list1">
          <li class="detail__description--item">
            <span id="strong">Native:</span> <span>Native Name</span>
          </li>
          <li class="detail__description--item">
            <span id="strong">Native:</span> <span>Native Name</span>
          </li>
          <li class="detail__description--item">
            <span id="strong">Native:</span> <span>Native Name</span>
          </li>
          <li class="detail__description--item">
            <span id="strong">Native:</span> <span>Native Name</span>
          </li>
          <li class="detail__description--item">
            <span id="strong">Native:</span> <span>Native Name</span>
          </li>
        </ul>
        <ul class="detail__description--list2">
          <li class="detail__description--item">
            <span id="strong">Native:</span> <span>Native Name</span>
          </li>
          <li class="detail__description--item">
            <span id="strong">Native:</span> <span>Native Name</span>
          </li>
          <li class="detail__description--item">
            <span id="strong">Native:</span> <span>Native Name</span>
          </li>
        </ul>

        <div class="detail__description--border">
          <span id="strong">Border Countries: </span>
          <span class="country">France</span>
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
