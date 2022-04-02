const d = document;

export default function settingId() {
  const $detailsTricksLinks = d.querySelectorAll("#details-tricks a");
  const $detailsUtilsLinks = d.querySelectorAll("#details-utils a");
  const $detailsIntroductionLinks = d.querySelectorAll(
    "#details-introduction a"
  );
  const settingReferences = (arrayLinks, section) => {
    const $h3 = section.querySelectorAll("h3");
    let i = 0;
    arrayLinks.forEach((el) => {
      el.setAttribute("href", `#${$h3[i].id}`);
      i++;
    });
  };
  const $sections = d.querySelectorAll("section");
  $sections.forEach((el) => {
    if (el.id === "tricks") settingReferences($detailsTricksLinks, el);
    if (el.id === "utils") settingReferences($detailsUtilsLinks, el);
    if (el.id === "introduction")
      settingReferences($detailsIntroductionLinks, el);
  });
}
