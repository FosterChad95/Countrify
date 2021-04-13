export default class View {
  _data;
  _cardContainer = document.querySelector(".card__container");
  _btn = document.querySelectorAll(".card__buttons");

  clearButtons() {
    this._btn.forEach((e) => (e.innerHTML = ""));
  }
  render(data) {
    if (!data) this.renderError;
    this._data = data;
    const markup = this._data.map((el) => this._generateCards(el)).join("");
    this._cardContainer.innerHTML = "";
    this._cardContainer.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    console.log(message);
    this._cardContainer.innerHTML = "";
    this._cardContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="error">
          <h2 class="error__message">${message}</h2>
        </div>`
    );
    this.clearButtons();
  }
}
