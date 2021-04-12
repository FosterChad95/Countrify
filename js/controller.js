import themeSwitch from "./views/themesView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import filterView from "./views/filterView.js";
import * as model from "./model.js";
import { async } from "regenerator-runtime";
import detailView from "./views/detailView.js";

const controlTheme = function () {
  themeSwitch.toggleTheme();
};

const controlSearch = async function () {
  try {
    const query = searchView.getSearch();

    const data = await model.loadSearchResults(query);
    resultsView.render(data);
  } catch (err) {
    searchView.renderError(err);
  }
};

const controlCardsInit = async function () {
  try {
    await model.loadCountry();
    const allData = model.state.countries;
    resultsView.render(allData);
  } catch (err) {
    throw err;
  }
};

const controlFilter = async function (ev) {
  try {
    await model.loadRegion(ev.target.value);
    const regions = model.state.countries;
    filterView.render(regions);
  } catch (err) {
    filterView.renderError(err);
  }
};

const controlCardDetail = function (btn) {
  const data = model.state.countries.find((e) => e.name === btn.dataset.name);
  detailView._hideMain();
  detailView._renderDetail(data);
  detailView._bordersDetail(data);
  history.pushState(
    null,
    null,
    window.location.pathname + "?" + data.numericCode
  );
  detailView.goBack();
};

const init = function () {
  themeSwitch.addHandlerTheme(controlTheme);
  searchView.addHandlerSearch(controlSearch);
  resultsView.addHandlerCards(controlCardsInit);
  filterView.addHandlerFilter(controlFilter);
  detailView.addDetailHandler(controlCardDetail);
};
init();
