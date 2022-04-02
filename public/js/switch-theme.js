const d = document;
const w = window;
const ls = localStorage;

const $toggleTheme = document.getElementById("icon-theme");

// if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
//   checkbox.setAttribute("checked", true);
// }

// console.log(w.matchMedia("(prefers-color-scheme: light)"));

export default function switchTheme() {
  const darkMode = () => {
    d.body.classList.remove("is-light-mode");
    d.body.classList.add("is-dark-mode");
    $toggleTheme.firstElementChild.classList.replace("uil-moon", "uil-sun");
    ls.setItem("theme", "dark");
  };

  const lightMode = () => {
    d.body.classList.remove("is-dark-mode");
    d.body.classList.add("is-light-mode");
    ls.setItem("theme", "light");
  };

  // if (w.matchMedia("(prefers-color-scheme: dark)").matches) {
  //   darkMode();
  // }

  $toggleTheme.addEventListener("click", () => {
    $toggleTheme.firstElementChild.classList.contains("uil-moon")
      ? ($toggleTheme.firstElementChild.classList.replace(
          "uil-moon",
          "uil-sun"
        ),
        darkMode())
      : ($toggleTheme.firstElementChild.classList.replace(
          "uil-sun",
          "uil-moon"
        ),
        lightMode());
  });

  d.addEventListener("DOMContentLoaded", (e) => {
    //                                             key   , value
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
