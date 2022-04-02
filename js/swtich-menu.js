const d = document;
const w = window;

const $toggleMenu = d.getElementById("icon-menu");
const $navMenu = d.querySelector(".nav-menu");

export default function switchMenu() {
  const showMenu = () => {
    $navMenu.classList.add("isActive");
    $toggleMenu.firstElementChild.classList.replace("uil-apps", "uil-multiply");
  };

  const hideMenu = () => {
    $navMenu.classList.remove("isActive");
    $toggleMenu.firstElementChild.classList.replace("uil-multiply", "uil-apps");
  };

  const listining = (eventName) => w.addEventListener(eventName, hideMenu);

  listining("scroll");
  listining("resize");

  d.addEventListener("click", (e) => {
    e.target.matches(".uil-apps")
      ? $navMenu.classList.contains("isActive")
        ? hideMenu()
        : showMenu()
      : hideMenu();
  });
}
