const d = document;
const $modal = d.getElementById("modal");
const $links = d.querySelectorAll(".main a");

export default function showModal() {
  $links.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href") === "#") {
        $modal.classList.add("modal-show");
        e.preventDefault();
      }
    });
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(".btn-modal")) {
      $modal.classList.remove("modal-show");
    }
    if (e.target.classList.contains("modal"))
      $modal.classList.remove("modal-show");
  });
}
