export default class View {
  _data;
  _cardContainer = document.querySelector(".card__container");

  render(data) {
    if (!data) this.renderError;
    this._data = data;
    const markup = this._data.map((el) => this._generateCards(el)).join("");
    this._cardContainer.innerHTML = "";
    this._cardContainer.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    console.log(message);
  }
}
