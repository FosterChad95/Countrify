import { async } from "regenerator-runtime";
export const state = {
  countries: {},
  search: {
    query: "",
    results: [],
    page: 1,
  },
};

export const loadCountry = async function () {
  try {
    const data = await fetch("https://restcountries.eu/rest/v2/all");

    if (!data.ok) throw new Error("Something went wrong please try again!");

    const res = await data.json();

    state.countries = res;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    const country = await fetch(
      `https://restcountries.eu/rest/v2/name/${query}`
    );
    const data = await country.json();

    state.search.results = data;
    if (!country.ok) throw new Error("Please search for a valid country name!");
    return state.search.results;
  } catch (err) {
    throw err;
  }
};
