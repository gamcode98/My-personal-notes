import addExternalLink from "./addExternalLink.js";
import scrollTopButton from "./boton_scroll.js";
import notes from "./notes.js";
import settingId from "./settingId.js";
import switchTheme from "./switch-theme.js";
import switchMenu from "./swtich-menu.js";
import templateSummary from "./templateSummary.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  switchMenu();
  scrollTopButton(".scroll-top-btn");
  notes();
  settingId();
  addExternalLink();
  templateSummary();
});
switchTheme();
