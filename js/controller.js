import themeSwitch from "./views/themesView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import filterView from "./views/filterView.js";
import * as model from "./model.js";
import { async } from "regenerator-runtime";
import detailView from "./views/detailView.js";
import paginationView from "./views/paginationView.js";
import View from "./views/View.js";

const controlTheme = function () {
  themeSwitch.toggleTheme();
};

const controlSearch = async function () {
  try {
    const query = searchView.getSearch();
    const data = await model.loadSearchResults(query);
    if (!data) throw Error;
    resultsView.render(data);
    searchView.clearButtons();
  } catch (err) {
    searchView.renderError(err.message);
  }
};

const controlCardsInit = async function () {
  try {
    await model.loadCountry();
    const allData = model.state.countries;
    resultsView.render(model.pagination());
    paginationView._renderButton(model.state.search);
  } catch (err) {
    View.renderError(err.message);
  }
};

const controlFilter = async function (ev) {
  try {
    await model.loadRegion(ev.target.value);
    const regions = model.state.countries;
    filterView.render(regions);
    filterView.clearButtons();
  } catch (err) {
    filterView.renderError(err.message);
  }
};

const controlCardDetail = function (btn) {
  detailView.clearButtons();
  const data = model.state.countries.find((e) => e.name === btn.dataset.name);
  detailView._hideMain();
  detailView._renderDetail(data);
  detailView._bordersDetail(data);
  history.pushState(
    null,
    null,
    window.location.pathname + "?" + data.numericCode
  );
  const origUrl = window.location.pathname;
  detailView.goBack(origUrl);
};

const controlPagination = function (btn) {
  const data = model.pagination(btn.target.dataset.num);
  paginationView._renderButton(model.state.search);
  model.state.search.page = +btn.target.dataset.num;
  resultsView.render(data);
};

const init = function () {
  themeSwitch.addHandlerTheme(controlTheme);
  searchView.addHandlerSearch(controlSearch);
  resultsView.addHandlerCards(controlCardsInit);
  filterView.addHandlerFilter(controlFilter);
  detailView.addDetailHandler(controlCardDetail);
  paginationView.addHandlerClick(controlPagination);
};
init();
