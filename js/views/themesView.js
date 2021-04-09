"use strict";
import View from "./View.js";
class ThemeSwitch extends View {
  //Element Selection
  btn = document.querySelector(".header__button");
  icon = document.querySelector(".header__icon");
  btnText = document.querySelector(".button__text");

  constructor() {
    super();
    this.themeStart();
  }

  addHandlerTheme(handler) {
    this.btn.addEventListener("click", handler);
  }

  setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
    if (themeName === "theme-light") {
      this.icon.classList.remove("fas");
      this.icon.classList.add("far");
      this.btnText.textContent = "Light Mode";
    } else {
      this.icon.classList.remove("far");
      this.icon.classList.add("fas");
      this.btnText.textContent = "Dark Mode";
    }
  }

  toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
      this.setTheme("theme-light");
    } else {
      this.setTheme("theme-dark");
    }
  }

  themeStart() {
    if (localStorage.getItem("theme") === "theme-dark") {
      this.setTheme("theme-dark");
    } else {
      this.setTheme("theme-light");
    }
  }
}

export default new ThemeSwitch();
