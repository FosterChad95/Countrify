import View from "./View.js";

class PaginationView extends View {
  _buttons = document.querySelector(".card__buttons");

  addHandlerClick(handler) {
    this._buttons.addEventListener("click", function (page) {
      const btn = page.target.closest(".btn");
      handler(page, btn);
    });
  }

  _renderButton(data) {
    const markup = this._generateMarkup(data);
    this._buttons.innerHTML = "";
    this._buttons.insertAdjacentHTML("beforeend", markup);
  }

  _generateMarkup(data) {
    const numPages = Math.ceil(data.results.length / data.resultsPerPage);
    const page = Number(data.page);
    console.log(page);
    if (page === 1) {
      return `
   
      <button class="btn card__next" data-num="${page + 1}">Next</button>
`;
    }
    if (page > 1 && page < numPages) {
      return `
      <button class="btn card__previous" data-num="${
        page - 1
      }">Previous</button>
      <button class="btn card__next" data-num="${page + 1}">Next</button>
`;
    }
    if (page === numPages) {
      return `
      <div class="card__buttons">
      <button class="btn card__previous" data-num="${
        page - 1
      }">Previous</button>
    </div>`;
    }
  }
}

export default new PaginationView();
