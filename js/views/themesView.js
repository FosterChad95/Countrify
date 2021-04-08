"use strict";
import View from "./View.js";
class ThemeSwitch extends View {
  //Element Selection
  btn = document.querySelector(".header__button");
  icon = document.querySelector(".header__icon");
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
    } else {
      this.icon.classList.remove("far");
      this.icon.classList.add("fas");
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
