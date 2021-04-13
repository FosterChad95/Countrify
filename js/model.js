import { async } from "regenerator-runtime";
import resultsView from "./views/resultsView";
export const state = {
  countries: {},
  search: {
    query: "",
    results: [],
    page: 1,
    resultsPerPage: 12,
  },
  regions: {},
};

export const loadCountry = async function () {
  try {
    const data = await fetch("https://restcountries.eu/rest/v2/all");

    if (!data.ok) throw new Error("Something went wrong please try again!");

    const res = await data.json();
    console.log(res);
    state.countries = res;
    state.search.results = res;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const country = await fetch(
      `https://restcountries.eu/rest/v2/name/${query}`
    );

    if (!country.ok) throw new Error("Please search for a valid country name!");
    const data = await country.json();
    state.search.results = data;
    return state.search.results;
  } catch (err) {
    throw err;
  }
};

export const loadRegion = async function (region) {
  try {
    const data = await fetch(
      `https://restcountries.eu/rest/v2/region/${region}`
    );
    const res = await data.json();
    if (!data) throw new Error(`${region} does not exist please try again!`);
    state.countries = res;
  } catch (err) {
    throw err;
  }
};

export const pagination = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.countries.slice(start, end);
};
