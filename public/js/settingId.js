const d = document;

export default function settingId() {
  const $detailsTricksLinks = d.querySelectorAll("#details-tricks a");
  const $sections = d.querySelectorAll("section");
  $sections.forEach((el) => {
    if (el.id === "tricks") {
      const $h3 = el.querySelectorAll("h3");
      let i = 0;
      $detailsTricksLinks.forEach((el) => {
        el.setAttribute("href", `#${$h3[i].id}`);
        i++;
      });
    }
  });
}
