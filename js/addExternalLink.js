const d = document;

export default function addExternalLink() {
  const $sections = d.querySelectorAll("section");
  $sections.forEach((el) => {
    if (el.id !== "") {
      const links = el.querySelectorAll("a");
      links.forEach((el) => {
        el.setAttribute("target", "_blank");
      });
    }
  });
}
