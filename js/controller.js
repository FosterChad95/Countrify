import themeSwitch from "./views/themesView.js";
import searchView from "./views/searchView.js";
import resultsView from "./views/resultsView.js";
import filterView from "./views/filterView.js";
import * as model from "./model.js";
import { async } from "regenerator-runtime";

const controlTheme = function () {
  themeSwitch.toggleTheme();
};

const controlSearch = async function () {
  try {
    const query = searchView.getSearch();

    const data = await model.loadSearchResults(query);
    if (!data) throw new Error("No country with that name!");
    resultsView.render(data);
  } catch (err) {
    throw err;
  }
};

const controlCardsInit = async function () {
  await model.loadCountry();
  const allData = model.state.countries;
  if (!allData) throw new Error("Something went wrong, please try again!");
  resultsView.render(allData);
};

const controlFilter = async function () {};

const init = function () {
  themeSwitch.addHandlerTheme(controlTheme);
  searchView.addHandlerSearch(controlSearch);
  resultsView.addHandlerCards(controlCardsInit);
  filterView.addHandlerFilter(controlFilter);
};
init();
