import scrollTopButton from "./boton_scroll.js";
import showModal from "./modal.js";
import switchTheme from "./switch-theme.js";
import switchMenu from "./swtich-menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  switchMenu();
  scrollTopButton(".scroll-top-btn");
  showModal();
});
switchTheme();
