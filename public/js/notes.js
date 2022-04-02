const d = document;
export default function notes() {
  const $code = d.querySelectorAll("code");
  $code.forEach((el) => {
    if (el.classList.contains("language-javascript")) {
      el.parentElement.classList.add("pre-js");
    }
    if (el.classList.contains("language-TypeScript")) {
      el.parentElement.classList.add("pre-ts");
    }
    if (el.classList.contains("language-html")) {
      el.parentElement.classList.add("pre-html");
    }
    if (el.classList.contains("language-css")) {
      el.parentElement.classList.add("pre-css");
    }
    if (el.classList.contains("language-console")) {
      el.parentElement.classList.add("pre-console");
    }
  });
}
