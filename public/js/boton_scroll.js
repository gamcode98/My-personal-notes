const d = document;
const w = window;
export default function scrollTopButton(btn) {
  const $scroll = d.querySelector(btn);
  w.addEventListener("scroll", (e) => {
    let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
    if (scrollTop > 600) {
      $scroll.classList.remove("hidden");
    } else {
      $scroll.classList.add("hidden");
    }
    // console.log(w.pageYOffset, d.documentElement.scrollTop);
  });
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      w.scrollTo({
        behavior: "smooth",
        top: 0,
        // left:0 -> para scroll en x
      });
    }
  });
}
