const d = document;
const $modal = d.querySelector("dialog");
const $links = d.querySelectorAll(".main a");
const $close = d.getElementById("close");

$links.forEach((el) => {
  if (el.getAttribute("href") === "#") {
    el.addEventListener("click", () => {
      $modal.showModal();
    });
  }
});
$close.addEventListener("click", () => $modal.close());
