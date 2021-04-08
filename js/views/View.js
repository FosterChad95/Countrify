export default class View {
  _data;

  render(data) {
    if (!data) this.renderError;
    this._data = data;
    const markup = this._data.map((el) => this._generateCards(el)).join("");
    this._parentElement.innerHTML = "";
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = this._errorMessage) {
    console.log(message);
  }
}
